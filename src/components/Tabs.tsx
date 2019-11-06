import React from "react";
import Item from "./Item";
// import Loader from './Loader';
import DisplayStatusMessage from "./DisplayStatusMessage";
import { connect } from "react-redux";
import { mapProps4state } from "../redux/state";
import { mapProps4dispatch } from "../redux/actions";
// import { getCSSProps } from '../ThemeCSS';

const Tabs: any = React.forwardRef<any>((props: any, unUsedRef: any) => {
  const refs = props.refs;
  let requiredRefExists: boolean = props.payload.refs.some((ref: any) =>
    /required/.test(ref.ref_type)
  );
  let recommendedRefExists: boolean = props.payload.refs.some((ref: any) =>
    /recommended/.test(ref.ref_type)
  );
  let ifCanVisualizeGraph: boolean =
    (requiredRefExists || recommendedRefExists) && !props.errOccurred;
  const renderGraph: React.ReactElement = (
    <div className="tab-items-wrapper graph-wrapper">
      <div id="graph" ref={refs.graph}></div>
      <div id="graph-key">
        Key:
        <br />
        <span className="key key-line-required"></span> required
        <br />
        <span className="key key-line-recommended"></span> recommended
      </div>
      <span
        className={`graph-tooltip ${
          props.graphNodeIsHovered ? "" : "fade-out"
        }`}
        ref={refs.graphTooltip}
      ></span>
    </div>
  );

  return (
    <div className="tabs-container" style={{ position: "relative" }}>
      {props.children}

      <div
        className="tabs-wrapper"
        style={{ opacity: props.refIsLoading ? 0 : 1 }}
      >
        <ul
          className={`tab required-tab
          ${/required/.test(props.activeTabName) ? "active-tab" : ""}
          ${!props.isViewedWithMobile ? "useCustomScrollBar" : ""}`}
          ref={
            /required/.test(props.activeTabName)
              ? refs.activeTab
              : refs.requiredTab
          }
        >
          {props.errOccurred ? (
            <DisplayStatusMessage typeofMsg="error" ref_type="required" />
          ) : requiredRefExists ? (
            props.payload.refs.map((ref: any, key: number) =>
              ref.ref_type === "required" ? (
                <Item
                  externLink={ref.url ? ref.url : null}
                  key={key}
                  refItemWrapper={refs.refItemWrapper}
                />
              ) : null
            )
          ) : (
            <DisplayStatusMessage typeofMsg="no-ref" ref_type="required" />
          )}
        </ul>

        <ul
          className={`tab recommended-tab
          ${/recommended/.test(props.activeTabName) ? "active-tab" : ""}
          ${!props.isViewedWithMobile ? "useCustomScrollBar" : ""}`}
          ref={
            /recommended/.test(props.activeTabName)
              ? refs.activeTab
              : refs.recommendedTab
          }
        >
          {props.errOccurred ? (
            <DisplayStatusMessage typeofMsg="error" ref_type="recommended" />
          ) : recommendedRefExists ? (
            props.payload.refs.map((ref: any, key: number) =>
              ref.ref_type === "recommended" ? (
                <Item
                  externLink={ref.url ? ref.url : null}
                  key={key}
                  refItemWrapper={refs.refItemWrapper}
                />
              ) : null
            )
          ) : (
            <DisplayStatusMessage typeofMsg="no-ref" ref_type="recommended" />
          )}
        </ul>

        <ul
          className={`tab graph-tab
          ${/graph/.test(props.activeTabName) ? "active-tab" : ""}
          ${!props.isViewedWithMobile ? "useCustomScrollBar" : ""}`}
          ref={/graph/.test(props.activeTabName) ? refs.activeTab : null}
        >
          {ifCanVisualizeGraph ? (
            renderGraph
          ) : (
            <DisplayStatusMessage typeofMsg="no-ref" ref_type="graph" />
          )}
        </ul>
      </div>
    </div>
  );
});

const mapStateToProps = mapProps4state([
  "payload",
  "errOccurred",
  "graphNodeIsHovered",
  "refIsLoading",
  "dropdownIsCollapsed",
  "historyExists",
  "activeTabName"
]);
const mapDispatchToProps = mapProps4dispatch([
  "UPDATE_PAYLOAD",
  "SET_ERROR_OCCURRED",
  "SET_DROPDOWN_IS_COLLAPSED",
  "SET_REF_IS_LOADING",
  "SET_DROPDOWN_IS_COLLAPSED",
  "SET_HISTORY_EXISTS",
  "UPDATE_ACTIVE_TAB_NAME"
]);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);
