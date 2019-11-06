import React from "react";
import { connect } from "react-redux";

import { State, mapProps4state } from "../redux/state";
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

const mapStateToProps = mapProps4state(["dropdownCurHeight", "dropdownIsCollapsed"]);

export default connect(mapStateToProps)(Dropdown);
