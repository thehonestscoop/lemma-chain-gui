import React from 'react';
import { ToggleBarItemsContext } from '../context';



const ToggleBarItems: any = React.forwardRef<any>((props: any, unusedRef: any) => 
(
  <ToggleBarItemsContext.Consumer>
    {(val: any) => (
      <>
        <button
          className={`tool-tip ${val.state.tooltipIsActive ? '' : 'fade-out'}`}
          onClick={val.copyRefID}
        >Copy</button>
        <section className='dropdown-toggle-bar' onClick={val.handleDropdownToggle}>
          <span style={{ alignSelf: 'center' }}>LC</span>
          <span className='refIDWrapper'>
            <span
              className='ref-identifier'
              title={`Title: ${val.state.payload.data.title}\nAuthor(s): ${val.state.payload.data.authors.join(', ')}\nRef. ID: ${val.state.refID}`}
              style={{ opacity: val.state.refIsLoading ? 0 : 1 }}>
              {val.state.refID}
              {/*HACK: This is for copying to clipboard as _NODE_.select() doesn't work for non-input elements, and TypeScript throws some error when trying to 'window.getSelection()'*/}
              <input
                type='text'
                value={val.state.refID}
                id='refIDCopy'
                style={{
                  position: 'absolute',
                  width: 1,
                  height: 1,
                  border: 'none',
                  top: -100
                }}
                ref={val.refs.refIDInputEl}
                onChange={(e) => e.target.value = val.state.refID}
              />
            </span>
            {props.children}
          </span>
          <span className={`caret-icon ${val.state.dropdownIsCollapsed ? 'flip-caret-icon' : ''}`}>❮</span>
        </section>
      </>
    )}
  </ToggleBarItemsContext.Consumer>
));



export default ToggleBarItems;