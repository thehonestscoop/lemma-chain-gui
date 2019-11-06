import { setStateWrapper, Payload } from '../redux/state';
import { child_refs, cssProps } from '../Widget';
import vis, { Network, Options } from 'vis';

/**
 * @param setGraphNodesAndEdges: gets and pushes graph nodes and edges to network for visualization
 */
const setGraphNodesAndEdges = (_ref: Payload, props: any): void => {
  const themeCSS = cssProps,
    ref: any = Object.assign({}, _ref),
    refHasParents = _ref.refs.length > 0 ? true : false,
    //making a copy of refs (parents) to avoid modifying actual parents
    parents = _ref.refs.map((parent: any) => Object.assign({}, parent)),
    colors = {
      self: {
        bg: themeCSS.graphCurrentNodeBg,
        bdr: themeCSS.graphCurrentNodeBorderColor
      },
      required: {
        bg: themeCSS.graphParentNodesBg,
        bdr: themeCSS.graphParentNodesBorderColor
      },
      recommended: { bg: "#20dcff", bdr: "#10bcf0" },
      alien: { bg: "#c0c0c0", bdr: "#b0b0b0" },
      other: {
        bg: themeCSS.graphParentNodesBg,
        bdr: themeCSS.graphParentNodesBorderColor
      }
    };

  //returns object of node properties e.g. color, font, background, border etc.
  const nodeProps = (_ref: Payload): object => {
    const color: any = {},
      isCurrentRef: boolean = _ref.id === props.refID;

    color.bg = colors.other.bg;
    color.bdr = colors.other.bdr;

    return {
      font: {
        size: 14,
        face: "Google Sans, Roboto Mono, Trebuchet MS",
        color: isCurrentRef ? colors.self.bdr : color.bdr,
        strokeWidth: 1,
        strokeColor: cssProps.dropdownBg
      },
      color: {
        background: isCurrentRef ? colors.self.bg : color.bg,
        border: isCurrentRef ? colors.self.bdr : color.bdr,
        hover: {
          background: cssProps.dropdownBg,
          border: isCurrentRef ? colors.self.bdr : color.bdr
        },
        highlight: {
          border: isCurrentRef ? colors.self.bdr : color.bdr,
          background: cssProps.dropdownBg
        }
      },
      shape: "dot",
      size: 16
    };
  };

  const pushNodesAndEdges = (): void => {
    // let parent: PayloadInterface;
    for (let parent of parents) {
      let _nodeProps: any = nodeProps(parent),
        nodeExists: boolean = false;

      //prepare and push nodes for visualization.
      //PS: If parent (ref) doesn't already exist in network, push to network
      for (let node of props.graph.nodes)
        if (
          node.id.replace(/.*\/(.*)/, "$1") ===
          parent.id.replace(/.*\/(.*)/, "$1")
        ) {
          nodeExists = true;
          break;
        }

      if (!nodeExists) {
        props.graph.nodes.unshift(
          Object.assign(
            {
              _id: parent.id,
              title: parent.data.title,
              label:
                parent.data.title.length > 10
                  ? `${parent.data.title.substr(0, 10).trim()}...`
                  : parent.data.title,
              ..._nodeProps
            },
            parent
          )
        );
        //extract hashID part of refID
        props.graph.nodes[0].id = parent.id.replace(/.*\/(.*)/, "$1");
      }

      //prepare and push edges for visualization
      props.graph.edges.unshift({
        from: ref.id.replace(/.*\/(.*)/, "$1"),
        to: parent.id.replace(/.*\/(.*)/, "$1"),
        arrows: {
          to: {
            enabled: true,
            scaleFactor: 0.5
          }
        },
        length: 120,
        font: { ..._nodeProps.font, size: 9 },
        color: {
          color:
            parent.ref_type === "required"
              ? cssProps.graphNetworkRequiredEdgeColor
              : cssProps.graphNetworkRecommendedEdgeColor,
          highlight:
            parent.ref_type === "required"
              ? cssProps.graphNetworkRequiredEdgeColor
              : cssProps.graphNetworkRecommendedEdgeColor,
          hover:
            parent.ref_type === "required"
              ? cssProps.graphNetworkRequiredEdgeColor
              : cssProps.graphNetworkRecommendedEdgeColor
        }
      });

      //QUOTE OF THE CENTURY: "To iterate is human, to recurse divine." - L. Peter Deutsch :D
      setGraphNodesAndEdges(parent, props);
    }
  };

  //i.e. if 'current' book (ref) has parents and itself has not yet been added to nodes (network), proceed to add
  if (
    refHasParents &&
    !props.graph.nodes.find(
      (node: any) =>
        node.id.replace(/.*\/(.*)/, "$1") === ref.id.replace(/.*\/(.*)/, "$1")
    )
  ) {
    //first add current node (ref) to nodes before pushing other nodes to network
    props.graph.nodes.unshift(
      Object.assign(
        {
          _id: ref.id,
          label: ref.data.title.replace(/\s(\w+|\d+)\s(\w+|\d+)/, " $1\n$2"),
          ...nodeProps(ref)
        },
        ref
      )
    );
    //extract hashID part of refID
    props.graph.nodes[0].id = ref.id.replace(/.*\/(.*)/, "$1");
    pushNodesAndEdges();
  } else if (refHasParents) pushNodesAndEdges();
};

export default setGraphNodesAndEdges;