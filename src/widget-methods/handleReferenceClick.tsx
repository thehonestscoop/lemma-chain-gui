import { setStateWrapper } from '../redux/state';
import { DOM_refs } from '../Widget';
import visualizeGraph from './visualizeGraph';

/**
 * @param handleReferenceClick: Reference click handler; fetches recommended and required refs for clicked ref
 */
const handleReferenceClick = (e: any, props: any): void => {
  const setState = setStateWrapper(props);

  //i.e. if link is clicked, prevent click event for ref
  if (/extern-link/.test(e.target.className)) return;

  const refID: string = e.currentTarget.dataset.id;

  //first set loading to true to visualize fadeout
  // props.SET_REF_IS_LOADING(true);
  setState({ refIsLoading: true });
  console.log('handleReferenceClick checking for refIsLoading: ', props.refIsLoading);

  setTimeout(() => {
    let ref: any;
    for (ref of props.payload.refs) {
      if (ref.id === refID) {
        setState({
          refID: ref.id,
          payload: ref
        });
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
        break;
      } else continue;
    }
  }, 300);
};

export default handleReferenceClick;