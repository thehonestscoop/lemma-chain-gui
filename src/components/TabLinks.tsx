import React from "react";
// import { Props } from './Dropdown';
import { getCSSProps } from "../ThemeCSS";
import widgetconfig from "../widgetconfig.json";
import { mapProps4state, setStateWrapper } from "../redux/state";
import { connect } from "react-redux";
import goBackInTime from "../widget-methods/goBackInTime";
import handleTabToggle from "../widget-methods/handleTabToggle";
import {
  mapProps4dispatch,
  getCorrespondingDispatchNames
} from "../redux/actions";

const TabLinks: any = React.forwardRef((props: any, unUsedRef: any) => {
  const setState = setStateWrapper(props);

  return (
    <div
      className="tab-links-wrapper"
      style={{
        height: props.dropdownIsCollapsed ? 0 : 48,
        maxWidth: widgetconfig.widgetMaxWidth
      }}
    >
      <button
        className="back-btn"
        title="Previous Ref"
        onClick={() => goBackInTime(props)}
        style={{ width: props.historyExists ? 55 : 0 }}
      >
        ❮
      </button>
      <button
        className={`required-tab-link tab-link 
          ${/required/.test(props.activeTabName) ? "active-tab-link" : ""}`}
        title="Required references"
        data-tab-name="required-tab"
        onClick={onTabLinkClick}
        ref={
          /required/.test(props.activeTabName) ? props.refs.activeTabLink : null
        }
      >
        Required
      </button>
      <button
        className={`recommended-tab-link tab-link 
          ${/recommended/.test(props.activeTabName) ? "active-tab-link" : ""}`}
        title="Recommended references"
        data-tab-name="recommended-tab"
        onClick={onTabLinkClick}
        ref={
          /recommended/.test(props.activeTabName)
            ? props.refs.activeTabLink
            : null
        }
      >
        Recommended
      </button>
      <button
        className={`graph-tab-link tab-link
          ${/graph/.test(props.activeTabName) ? "active-tab-link" : ""}`}
        title="View graph"
        data-tab-name="graph-tab"
        style={{
          background: /graph/.test(props.activeTabName)
            ? getCSSProps().graphTablinkHoverBg
            : ""
        }}
        onClick={onTabLinkClick}
        ref={
          /graph/.test(props.activeTabName) ? props.refs.activeTabLink : null
        }
      >
        ★
      </button>
    </div>
  );

  function onTabLinkClick(e: any) {
    const activeTabName = e.target.getAttribute("data-tab-name");
    const tabLink = e.target;

    if (tabLink.getAttribute("data-tab-name"))
      setState({
        activeTabName: activeTabName,
        activeTabLinkName: `${activeTabName}-link`
      }).then(props => handleTabToggle(tabLink, props));
  }
});

const stateProps = [
  "dropdownIsCollapsed",
  "historyExists",
  "activeTabName",
  "dropdownCurHeight",
  "activeTabLinkName"
];

const mapStateToProps = mapProps4state(stateProps);
const mapDispatchToProps = mapProps4dispatch(
  getCorrespondingDispatchNames(stateProps)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabLinks);
