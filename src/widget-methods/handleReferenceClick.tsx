import { setStateWrapper } from '../redux/state';
import { DOM_refs } from '../Widget';
import visualizeGraph from './visualizeGraph';

/**
 * @param handleReferenceClick: Reference click handler; fetches recommended and required refs for clicked ref
 */
const handleReferenceClick = (target: any, props: any): void => {
  const setState = setStateWrapper(props);

  //i.e. if link is clicked, prevent click event for ref
  if (/extern-link/.test(target.className)) return;
console.log('code got here', props.payload)
  const refID: string = target.dataset.id;

  //first set loading to true to visualize fadeout
  setState({ refIsLoading: true });

  setTimeout(() => {
    let ref: any;
    for (ref of props.payload.refs) {
      if (ref.id === refID) {
        setState({
          refID: ref.id,
          payload: ref
        });
        break;
      } else continue;
    }
    setTimeout(() => {
      setState({
        refIsLoading: false,
        historyExists: true,
        dropdownCurHeight: DOM_refs.activeTab.current,
        history: { ...props }
      });
      //update history
      // this.history.push(Object.assign({}, this.state));
      //delay till state payload is set before visualizing to avoid errors
      setTimeout(() => visualizeGraph(props), 200);
    }, 300);
  }, 300);
};

export default handleReferenceClick;