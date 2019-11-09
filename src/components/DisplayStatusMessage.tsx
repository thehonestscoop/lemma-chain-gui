import React, { CSSProperties } from "react";
import { connect } from "react-redux";

import { mapProps4state } from "../redux/state";
import {
  mapProps4dispatch,
  getCorrespondingDispatchNames
} from "../redux/actions";

/**
 * @param DisplayStatusMessage: Displays error message or 'book has no-ref' message depending on context.
 */
function DisplayStatusMessage(props: any) {
  const messageWrapperStyle: CSSProperties = {
      padding: "20px 30px",
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      color: "#888",
      fontSize: 14,
      minHeight: 200,
      opacity: props.refIsLoading ? 0 : 1,
      transition: "0.3s"
    };
  const errImgStyle: CSSProperties = {
      opacity: 0.5,
      borderRadius: "50%",
      width: 80,
      height: "auto",
      marginBottom: 10
    };
  const suggestMsg: React.ReactFragment = (
      <>
        <b>Suggest:</b> Must be a network issue. Check internet connection then
        try again.
      </>
    )
  const errMsg: React.ReactFragment = (
      <>
        Sorry. Could not load <b>{props.ref_type}</b> references for this book.
        <br />
        <br />
        {/fetch/i.test(props.errMsg)
          ? suggestMsg
          : "An unexpected error occurred. Please, try again."}
      </>
    );
  const nothingToShowMessage: React.ReactFragment = (
      <>
        Nothing to show.
        <br />
        Book has no <b>{props.ref_type}</b> references.
      </>
    )
  const graphStatusMessage: React.ReactFragment = (
      <>
        Sorry. Can't visualize <b>graph</b>.<br />
        <b>{props.errMsg ? "" : "Reason: "}</b>
        {props.errMsg ? "" : "Book has no parent refs."}
      </>
    );

  return (
    <div className="item-wrapper" style={messageWrapperStyle}>
      <span className="props">
        <img src="err_grey.png" alt="Status" style={errImgStyle} />
        <br />
        {/graph/.test(props.ref_type)
          ? graphStatusMessage
          : /error/.test(props.typeofMsg)
          ? errMsg
          : nothingToShowMessage}
      </span>
    </div>
  );
}

const stateProps = ["refIsLoading", "errMsg"];
const mapStateToProps = mapProps4state(stateProps);
const mapDispatchToProps = mapProps4dispatch(
  getCorrespondingDispatchNames(stateProps)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayStatusMessage);
