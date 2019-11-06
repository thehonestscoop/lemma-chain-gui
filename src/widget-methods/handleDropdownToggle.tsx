import { setStateWrapper } from "../redux/state";
import { child_refs } from "../Widget";


const handleDropdownToggle = (e: any, props: any) => {
  const setState = setStateWrapper(props);
  
  if (e.target.className.match("ref-identifier"))
    setState({ tooltipIsActive: !props.tooltipIsActive });
  else {
    const { dropdownIsCollapsed } = props;
      
    setState({
      dropdownIsCollapsed: !dropdownIsCollapsed,
      dropdownCurHeight: dropdownIsCollapsed ? child_refs.activeTab.current : 0
    });
  }
};

export default handleDropdownToggle;