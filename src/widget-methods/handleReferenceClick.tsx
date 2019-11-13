import { initSetStateForProps } from "../redux/state";
import { DOM_refs } from "../Widget";
import visualizeGraph from "./visualizeGraph";
import { store } from "../index";

/**
 * @param handleReferenceClick: Reference click handler; fetches recommended and required refs for clicked ref
 */
const handleReferenceClick = (target: any, props: any): void => {
  let setState = initSetStateForProps(props);
  // const history = state.history.length > 1 ? [...state.history] : [Object.assign({}, state)];
  console.log("this was logged from handlerefclick", props.history);
  let history = props.history;

  //i.e. if link is clicked, prevent click event for ref
  if (/extern-link/.test(target.className)) return;

  const refID: string = target.dataset.id;

  //first set loading to true to visualize fadeout
  setState({ refIsLoading: true });

  setTimeout(() => {
    for (const ref of props.payload.refs) {
      if (ref.id === refID) {
        console.log("okAyyyyyyyyyyyy, this is ref,", ref);
        setState({
          refID: ref.id,
          payload: { ...ref }
        }).then(props => {
          // console.log("gggggggggggg", props.payload);
          setTimeout(() => {
            setState = initSetStateForProps(props);
            // const currentState = Object.assign({}, store.getState());
            const history = props.history;

            setState({
              refIsLoading: false,
              historyExists: true,
              dropdownCurHeight: DOM_refs.activeTab.current
            }).then(props => {
              // console.log(
              //   "current props: ",
              //   props.payload,
              //   store.getState().payload
              // );
              visualizeGraph(props);
              // setState({ history: [...history, Object.assign({}, store.getState)] }).then(props => console.log('history after reference click: ', store.getState().history))
              history.push({...store.getState()})
              console.log('history................',history);
            });
          }, 300);
        });
        break;
      } else continue;
    }

  }, 300);
};

export default handleReferenceClick;
