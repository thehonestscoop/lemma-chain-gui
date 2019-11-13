import { initSetStateForProps, State } from "../redux/state";
import visualizeGraph from "./visualizeGraph";
import { store } from '../index';
// import { history as _history } from '../Widget';
/**
 * @param goBackInTime: history navigation (time traveller) function; handles going back one depth on click of 'back button'
 */
const goBackInTime = (props: any): any => {
  const setState = initSetStateForProps(props);
  const history: State = props.history;
  let toPast: object;
  let pastIndex = history.length - 2;

  if (pastIndex >= 0 && history[pastIndex]) {
    toPast = history[pastIndex];
console.log('toPast...', toPast);
    setState(toPast).then(props => {
      //remove/delete past's future having travelled back in time
      history.pop();
      console.log('props:',props,'state:', store.getState().payload)
      visualizeGraph(props);
    });
  }
  else {
    setState({ historyExists: false });
    return null;
  }

  

  

  // //delay till state payload is set before visualizing to avoid errors
  // setTimeout(() => visualizeGraph(props), 200);
};

export default goBackInTime;