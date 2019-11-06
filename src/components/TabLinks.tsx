import React from 'react';
// import { Props } from './Dropdown';
import { getCSSProps } from '../ThemeCSS';
import widgetconfig from '../widgetconfig.json';
import { mapProps4state } from '../redux/state';
import { connect } from 'react-redux';
import goBackInTime from '../widget-methods/goBackInTime';
import handleTabToggle from '../widget-methods/handleTabToggle';




const TabLinks: any = React.forwardRef((props: any, unUsedRef: any) =>
{
  return (
    <div className='tab-links-wrapper' style={{height: props.dropdownIsCollapsed ? 0 : 48, 
      maxWidth: widgetconfig.widgetMaxWidth}}>
      <button
        className='back-btn'
        title='Previous Ref'
        onClick={() => goBackInTime(props)}
        style={{width: props.historyExists ? 55 : 0}}
      >❮</button>
      <button
        className={`required-tab-link tab-link 
          ${/required/.test(props.activeTabName) ? 'active-tab-link' : ''}`}
        title='Required references'
        data-tab-name='required-tab'
        onClick={(e) => handleTabToggle(e, props)}
        ref={/required/.test(props.activeTabName) ? props.ref : null}
      >Required</button>
      <button
        className={`recommended-tab-link tab-link 
          ${/recommended/.test(props.activeTabName) ? 'active-tab-link' : ''}`}
        title='Recommended references'
        data-tab-name='recommended-tab'
        onClick={(e) => handleTabToggle(e, props)}
        ref={/recommended/.test(props.activeTabName) ? props.ref : null}
      >Recommended</button>
      <button
        className={`graph-tab-link tab-link
          ${/graph/.test(props.activeTabName) ? 'active-tab-link' : ''}`}
        title='View graph'
        data-tab-name='graph-tab'
        style={{background: /graph/.test(props.activeTabName) ? getCSSProps().graphTablinkHoverBg : ''}}
        onClick={(e) => handleTabToggle(e, props)}
        ref={/graph/.test(props.activeTabName) ? props.ref : null}
      >★</button>
    </div>
  )
});



const mapStateToProps = mapProps4state(['dropdownIsCollapsed', 'historyExists', 'activeTabName']);

export default connect(mapStateToProps)(TabLinks);

