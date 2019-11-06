import React from "react";
import { connect } from "react-redux";

import { mapProps4state } from "../redux/state";
import { mapProps4dispatch, getCorrespondingDispatchNames } from "../redux/actions";
// import { DropdownContext } from '../context';

const Dropdown: any = React.forwardRef<any>((props: any, ref: any) => {
  return (
    <section
      className="dropdown"
      style={{
        height: props.dropdownCurHeight,
        borderBottomWidth: props.dropdownIsCollapsed ? 0 : 2
      }}
      ref={ref}
    >
      {props.children}
    </section>
  );
});

const stateProps = [
  "dropdownCurHeight",
  "dropdownIsCollapsed"
];

const mapStateToProps = mapProps4state(stateProps);
const mapDispatchToProps = mapProps4dispatch(getCorrespondingDispatchNames(stateProps));

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown);
