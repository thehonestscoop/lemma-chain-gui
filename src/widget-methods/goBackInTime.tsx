import { setStateWrapper } from "../redux/state";
import visualizeGraph from "./visualizeGraph";

/**
 * @param goBackInTime: history navigation (time traveller) function; handles going back one depth on click of 'back button'
 */
const goBackInTime = (props: any): any => {
  const setState = setStateWrapper(props);
  let toPast: object;
  let pastIndex = props.history.length - 2;
  let copyHistory = props.history;

  if (pastIndex >= 0 && props.history[pastIndex]) {
    toPast = props.history[pastIndex];
    setState({ ...toPast });
  }
  else {
    setState({ historyExists: false });
    return null;
  }

  //remove/delete past's future having travelled back in time
  copyHistory.pop();
  setState({ history: copyHistory });

  //delay till state payload is set before visualizing to avoid errors
  setTimeout(() => visualizeGraph(props), 200);
};

export default goBackInTime;