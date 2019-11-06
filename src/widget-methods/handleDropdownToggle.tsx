import { setStateWrapper } from "../redux/state";
import { DOM_refs } from "../Widget";


const handleDropdownToggle = (e: any, props: any) => {
  const setState = setStateWrapper(props);
  
  if (e.target.className.match("ref-identifier"))
    setState({ tooltipIsActive: !props.tooltipIsActive });
  else {
    let { dropdownIsCollapsed } = props;
 
    setState({
      dropdownIsCollapsed: !dropdownIsCollapsed,
      dropdownCurHeight: dropdownIsCollapsed ? DOM_refs.activeTab.current : 0
    });
    console.log('dropdownIsCollapsed', props.dropdownIsCollapsed)
  }
};

export default handleDropdownToggle;