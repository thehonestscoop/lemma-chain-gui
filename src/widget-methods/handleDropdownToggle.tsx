import { initSetStateForProps } from "../redux/state";
import { DOM_refs } from "../Widget";

const handleDropdownToggle = (e: any, props: any) => {
  const setState = initSetStateForProps(props);

  if (e.target.className.match("ref-identifier"))
    setState({ tooltipIsActive: !props.tooltipIsActive });
  else
    setState({
      dropdownIsCollapsed: !props.dropdownIsCollapsed,
      dropdownCurHeight: props.dropdownIsCollapsed
        ? DOM_refs.activeTab.current
        : 0
    });
};

export default handleDropdownToggle;
