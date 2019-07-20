import React from 'react';
import { DropdownContext } from '../context';



const Dropdown: any = React.forwardRef<any>((props: any, ref: any) => 
{
  return (
    <DropdownContext.Consumer>
      {(val: any) => (
        <section
          className='dropdown'
          style={{height: val.state.dropdownCurHeight, borderBottomWidth: val.state.dropdownIsCollapsed ? 0 : 2}}
          ref={ref}>
          {props.children}
        </section>
      )}
    </DropdownContext.Consumer>
  );
})



export default Dropdown;



