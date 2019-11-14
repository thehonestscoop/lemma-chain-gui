import { initSetStateForProps, State } from "../redux/state";
import visualizeGraph from "./visualizeGraph";

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
    setState(toPast).then(props => {
      //remove/delete past's future having travelled back in time
      history.pop();
      visualizeGraph(props);
    });
  } else setState({ historyExists: false });
};

export default goBackInTime;
