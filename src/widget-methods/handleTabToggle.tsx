import { setStateWrapper } from "../redux/state";
import { DOM_refs } from "../Widget";

const handleTabToggle = (currentTabLink: any, props: any): void => {
  const currentTab: any = DOM_refs.activeTab.current;
  const activeTabName: string = currentTabLink.getAttribute("data-tab-name");
  const setState = setStateWrapper(props);
  
  setState({
    dropdownCurHeight: currentTab,
    activeTabName: activeTabName,
    activeTabLinkName: `${activeTabName}-link`
  });
};

export default handleTabToggle;
