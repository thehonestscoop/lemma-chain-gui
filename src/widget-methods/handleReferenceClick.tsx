import { setStateWrapper } from "../redux/state";
import { DOM_refs } from "../Widget";
import visualizeGraph from "./visualizeGraph";
import { store } from "../index";

/**
 * @param handleReferenceClick: Reference click handler; fetches recommended and required refs for clicked ref
 */
const handleReferenceClick = (target: any, props: any): void => {
  const setState = setStateWrapper(props);

  //i.e. if link is clicked, prevent click event for ref
  if (/extern-link/.test(target.className)) return;
  console.log("code got here", props.payload);
  const refID: string = target.dataset.id;

  //first set loading to true to visualize fadeout
  setState({ refIsLoading: true });

  setTimeout(() => {
    for (const ref of props.payload.refs) {
      if (ref.id === refID) {
        setState({
          refID: ref.id,
          payload: ref
        });
        break;
      } else continue;
    }
// console.log('history: ', props.history);
console.log('store state: ', store.getState());
    setTimeout(() => {
      const history = Object.assign({}, store.getState());

      setState({
        refIsLoading: false,
        historyExists: true,
        dropdownCurHeight: DOM_refs.activeTab.current,
        history: props.history
          ? [ ...props.history, history ]
          : [ history ]
      }).then(props => visualizeGraph(props));
    }, 300);
  }, 300);
};

export default handleReferenceClick;
