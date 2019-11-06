import { setStateWrapper } from '../redux/state';
import { child_refs } from '../Widget';
import setGraphNodesAndEdges from './setGraphNodesAndEdges';
import vis, { Network, Options } from 'vis';

/**
 * @param visualizeGraph: renders graph to DOM; returns void
 */
const visualizeGraph = (props: any): void => {
  const setState = setStateWrapper(props);
  const graph = {
    nodes: [],
    edges: []
  };

  setState({ graph: graph });

  setGraphNodesAndEdges(props.payload, props);

  //if no nodes exist (which implies no parent(s)), do not proceed to visualize graph to avoid errors
  if (props.graph.nodes.length < 1) return;

  //create an array with nodes
  let nodes = new vis.DataSet(props.graph.nodes),
    //create an array with edges
    edges = new vis.DataSet(props.graph.edges),
    container: any = child_refs.graph.current,
    //set graph data
    data: any = {
      nodes: nodes,
      edges: edges
    },
    //set graph options
    options: Options = {
      nodes: { borderWidth: 1.5 },
      edges: {
        color: { inherit: false }
      },
      interaction: { hover: true }
    },
    //create a network
    network: Network = new vis.Network(container, data, options),
    graphTooltip = child_refs.graphTooltip.current;

  const moveAndUpdateGraphTooltip = (params: any): void => {
    //'params.node' implies event is triggered by node-hover event while 'params.nodes[0]' implies event is triggered by node-click event
    let label: string = !params.node ? params.nodes[0] : params.node,
      currentNode = props.graph.nodes.find((node: any) => label === node.id),
      authors = currentNode.data.authors,
      renderLink = `url: <a 
                        href='${currentNode.url}' 
                        target='_blank'
                        rel='noopener noreferrer'
                        style='color: white;'>${currentNode.url}</a>`;

    authors = authors.length > 1 ? `${authors[0]}...` : authors;

    graphTooltip.innerHTML = `${currentNode.data.title}<br />
      <i style='font-size: 11px;'>
        ${!params.node ? authors : ""}
      </i>
      <span style='font-size: 9px;'>
        ${!params.node ? currentNode._id : ""}
      </span>
      <i style='font-size: 9px;'>${currentNode.url ? renderLink : ""}</i>`;
    graphTooltip.style.left = `${Math.ceil(params.pointer.DOM.x) - 10}px`;
    graphTooltip.style.top = `${Math.ceil(
      params.pointer.DOM.y - (graphTooltip.offsetHeight - 10)
    ) - 15}px`;
  };

  //network nodes event listeners
  network.on("selectNode", (params: any) => {
    setState({
      graphNodeIsHovered: true,
      graphNodeIsActive: true
    });
    moveAndUpdateGraphTooltip(params);
  });
  network.on("deselectNode", () =>
    setState({
      graphNodeIsHovered: false,
      graphNodeIsActive: false
    })
  );
  network.on("hoverNode", (params: any) => {
    if (!props.graphNodeIsActive) {
      setState({ graphNodeIsHovered: true });
      moveAndUpdateGraphTooltip(params);
    }
  });
  network.on("blurNode", () =>
    setState({
      graphNodeIsHovered: props.graphNodeIsActive ? true : false
    })
  );
  network.on("dragStart", () => setState({ graphNodeIsHovered: false }));
  network.on("dragEnd", () => setState({ graphNodeIsHovered: false }));

  let graphIsZoomed = false,
    initialScale = props.graph.nodes.length < 10 ? 0.85 : 0.55;

  network.on("zoom", () => {
    initialScale = network.getScale();
    setState({ graphNodeIsHovered: false });
  });
  network.on("doubleClick", () => {
    if (!graphIsZoomed) network.moveTo({ scale: initialScale + 0.5 });
    else network.moveTo({ scale: initialScale });

    graphIsZoomed = !graphIsZoomed;
  });
  network.once("stabilized", () => network.moveTo({ scale: initialScale }));
};

export default visualizeGraph;