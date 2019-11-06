import React from "react";
import copyRefID from "../widget-methods/copyRefID";
import handleDropdownToggle from "../widget-methods/handleDropdownToggle";
import { mapProps4state } from "../redux/state";
import { connect } from "react-redux";
import { mapProps4dispatch, getCorrespondingDispatchNames } from "../redux/actions";

const lcLogoImgSrc =
  "data:image/png;base64,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";

const ToggleBarItems: any = React.forwardRef<any>(
  (props: any, unusedRefs: any) => {
    const refs = props.refs;
// console.log('checking ref is loading:', props.refIsLoading);
    return (
      <>
        <button
          className={`tool-tip ${props.tooltipIsActive ? "" : "fade-out"}`}
          onClick={e => copyRefID(e, props)}
        >
          Copy
        </button>
        <section
          className="dropdown-toggle-bar"
          onClick={e => handleDropdownToggle(e, props)}
        >
          <span style={{ alignSelf: "center", minWidth: 20 }}>
            <img
              src={lcLogoImgSrc}
              alt="LC"
              title="Lemma Chain"
              style={{
                width: "38px",
                position: "absolute",
                top: "22%"
              }}
            />
          </span>
          <span className="refIDWrapper">
            <span
              className="ref-identifier"
              title={`Title: ${
                props.payload.data.title
              }\nAuthor(s): ${props.payload.data.authors.join(
                ", "
              )}\nRef. ID: ${props.refID}`}
              style={{ opacity: props.refIsLoading ? 0 : 1 }}
            >
              {props.refID}
              {/*HACK: This is for copying to clipboard as _NODE_.select() doesn't work for non-input elements, and TypeScript throws some error when trying to 'window.getSelection()'*/}
              <input
                type="text"
                value={props.refID}
                id="refIDCopy"
                style={{
                  position: "absolute",
                  width: 1,
                  height: 1,
                  border: "none",
                  top: -100
                }}
                ref={refs.refIDInputEl}
                onChange={e => (e.target.value = props.refID)}
              />
            </span>
            {props.children}
          </span>
          <span
            className={`caret-icon ${
              props.dropdownIsCollapsed ? "flip-caret-icon" : ""
            }`}
          >
            ❮
          </span>
        </section>
      </>
    );
  }
);

const stateProps = [
  "tooltipIsActive",
  "payload",
  "refID",
  "refIsLoading",
  "dropdownIsCollapsed",
  'dropdownCurHeight'
];

const mapStateToProps = mapProps4state(stateProps);
const mapDispatchToProps = mapProps4dispatch(getCorrespondingDispatchNames(stateProps));


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleBarItems);
