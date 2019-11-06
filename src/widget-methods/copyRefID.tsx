import { child_refs } from "../Widget";
import { setStateWrapper } from "../redux/state";

const copyRefID = (e: React.MouseEvent<HTMLButtonElement>, props: any) => {
  const tooltip = e.currentTarget;
  const setState = setStateWrapper(props);

  child_refs.refIDInputEl.current.select();
  document.execCommand("copy");
  child_refs.refIDInputEl.current.blur();
  tooltip.textContent = "Copied to clipboard";
  setTimeout(() => {
    setState({ tooltipIsActive: false });
    setTimeout(() => {
      tooltip.textContent = "Copy";
    }, 300);
  }, 1500);
};

export default copyRefID;