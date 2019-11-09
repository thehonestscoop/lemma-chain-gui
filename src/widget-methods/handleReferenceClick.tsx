import { setStateWrapper as readySetStateFor } from "../redux/state";
import { DOM_refs } from "../Widget";
import visualizeGraph from "./visualizeGraph";
import { store } from "../index";

/**
 * @param handleReferenceClick: Reference click handler; fetches recommended and required refs for clicked ref
 */
const handleReferenceClick = (item: any, props: any): void => {
  const state = store.getState();
  const setState = readySetStateFor(props);
  const history = state.history.length > 1 ? [...state.history] : [Object.assign({}, state)];
  
  if (history[0] && history[0].dropdownIsCollapsed) {
    // history[0] = Object.assign({}, store.getState());
    // setState({
    //   ...history[0]
    // }).then(_ => {
      history[0].dropdownCurHeight = DOM_refs.activeTab.current.offsetHeight + 2;
      history[0].dropdownIsCollapsed = false;
      history[0].historyExists = true;
      setState({ history: history });
      console.log('store after set history: ', store.getState());
    // });
  }


  //i.e. if link is clicked, prevent click event for ref
  if (/extern-link/.test(item.className)) return;
  
  const refID: string = item.dataset.id;

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

    setTimeout(() => {
      const currentState = Object.assign({}, store.getState());
      const history = Object.assign([], store.getState().history);

      setState({
        refIsLoading: false,
        historyExists: true,
        dropdownCurHeight: DOM_refs.activeTab.current
      }).then(props => {
        console.log('current props: ', props.history);
        visualizeGraph(props);
        setState({ history: [...history, Object.assign({}, store.getState)] }).then(props => console.log('history after reference click: ', store.getState().history))
      });

      
    }, 300);
  }, 300);
};

export default handleReferenceClick;
