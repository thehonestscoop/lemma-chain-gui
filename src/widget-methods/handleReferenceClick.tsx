import { initSetStateForProps } from "../redux/state";
import { DOM_refs } from "../Widget";
import visualizeGraph from "./visualizeGraph";
import { store } from "../index";

/**
 * @param handleReferenceClick: Reference click handler; fetches recommended and required refs for clicked ref
 */
const handleReferenceClick = (target: any, props: any): void => {
  let setState = initSetStateForProps(props);

  //i.e. if link is clicked, prevent click event for ref
  if (/extern-link/.test(target.className)) return;

  const refID: string = target.dataset.id;

  //first set loading to true to visualize fadeout
  setState({ refIsLoading: true });

  setTimeout(() => {
    for (const ref of props.payload.refs) {
      if (ref.id === refID) {
        setState({
          refID: ref.id,
          payload: { ...ref }
        }).then(props => {
          setTimeout(() => {
            const history = props.history;
            setState = initSetStateForProps(props);
            
            setState({
              refIsLoading: false,
              historyExists: true,
              dropdownCurHeight: DOM_refs.activeTab.current
            }).then(props => {
              visualizeGraph(props);
              history.push({...store.getState()})
            });
          }, 300);
        });
        break;
      } else continue;
    }
  }, 300);
};

export default handleReferenceClick;
