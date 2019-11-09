import { setStateWrapper } from "../redux/state";
import visualizeGraph from "./visualizeGraph";
import { store } from '../index';
/**
 * @param goBackInTime: history navigation (time traveller) function; handles going back one depth on click of 'back button'
 */
const goBackInTime = (props: any): any => {
  props = { ...store.getState() };
  const setState = setStateWrapper(props);
  let toPast: object;
  let history =  [...store.getState().history];
  let pastIndex = history.length - 1;

  if (pastIndex >= 0 && history[pastIndex]) {
    toPast = history[pastIndex];
console.log('toPast...', toPast);
    setState({ ...toPast });
  }
  else {
    setState({ historyExists: false });
    return null;
  }

  //remove/delete past's future having travelled back in time
  history.pop();
  setState({ history: history }).then(props => visualizeGraph(props));

  // //delay till state payload is set before visualizing to avoid errors
  // setTimeout(() => visualizeGraph(props), 200);
};

export default goBackInTime;