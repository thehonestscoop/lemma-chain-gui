import React from "react";
import { mapProps4state, setStateWrapper } from "../redux/state";
import { connect } from "react-redux";
import handleReferenceClick from "../widget-methods/handleReferenceClick";
import {
  mapProps4dispatch,
  getCorrespondingDispatchNames
} from "../redux/actions";

const Item = React.forwardRef((props: any, unusedRef: any) => {
  // console.log('Items checking for refIsLoading: ', props.refIsLoading);
  const setState = setStateWrapper(props);
  const refItemWrapper = props.refItemWrapper;
  const appendURL = (
    <a
      href={props.externLink}
      target="_blank"
      className="extern-link"
      rel="noopener noreferrer"
    >
      <img className="extern-link-icon" src="link.png" alt="link" />
    </a>
  );

  return (
    <div
      className="item-wrapper"
      data-data={props.itemPayload.data}
      data-id={props.itemPayload.id}
      onClick={(e: any) => {
        let target = /extern-link/.test(e.target.className)
          ? e.target
          : e.currentTarget;

        // console.log('target:', target)

        setState({ payload: { ...props.itemPayload } }).then(props => {
          handleReferenceClick(target, props);
        });
      }}
      ref={refItemWrapper}
    >
      <li className="item">
        <span className="props">
          Title: <b>{props.itemPayload.data.title}</b>
        </span>
        <span className="props">
          Author{props.itemPayload.data.authors.length > 1 ? "s" : ""}:{" "}
          {props.itemPayload.data.authors.join(", ")}
        </span>
        <span className="props">
          Ref. ID: <b>{props.itemPayload.id}</b>
        </span>
        {props.externLink ? appendURL : ""}
      </li>
    </div>
  );
});

// const { allActionNames, allProps } = allActionNamesAndProps;

// const mapStateToProps = mapProps4state(allProps);
// const mapDispatchToProps = mapProps4dispatch(allActionNames)

const stateProps = [
  "payload",
  "graphNodes",
  "graphEdges",
  "refIsLoading",
  "graphNodeIsHovered",
  "graphNodeIsActive",
  "refID",
  "historyExists",
  "dropdownCurHeight"
];

const mapStateToProps = mapProps4state(stateProps);
const mapDispatchToProps = mapProps4dispatch([
  ...getCorrespondingDispatchNames(stateProps)
]);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
