import React from 'react';
import { TabsContext } from '../context';
import Item from './Item';
// import Loader from './Loader';
import DisplayStatusMessage from './DisplayStatusMessage';
// import { getCSSProps } from '../ThemeCSS';



const Tabs: any = React.forwardRef<any>((props: any, noRefs: any) =>
{
  return (
    <TabsContext.Consumer>
      {(val: any) =>
        {
          let requiredRefExists: boolean = val.state.payload.refs.some((ref: any) => /required/.test(ref.ref_type)),
              recommendedRefExists: boolean = val.state.payload.refs.some((ref: any) => /recommended/.test(ref.ref_type)),
              ifCanVisualizeGraph: boolean = (requiredRefExists || recommendedRefExists) && !val.state.errOccurred,
              renderGraph: React.ReactElement = 
                <div className='tab-items-wrapper graph-wrapper'>
                  <div id='graph' ref={val.refs.graph}></div>
                  <div id='graph-key'>
                    Key:<br />
                    <span className='key key-line-required'></span> required<br />
                    <span className='key key-line-recommended'></span> recommended
                  </div>
                  <span
                    className={`graph-tooltip ${val.state.graphNodeIsHovered ? '' : 'fade-out'}`}
                    ref={val.refs.graphTooltip}></span>
                </div>;

          return (
            <div className='tabs-container' style={{position: 'relative'}}>
              {props.children}
              
              <div className='tabs-wrapper' style={{opacity: val.state.refIsLoading ? 0 : 1}}>
                <ul className={`tab required-tab
                  ${/required/.test(val.state.activeTabName) ? 'active-tab' : ''}
                  ${!val.isViewedWithMobile ? 'useCustomScrollBar' : ''}`}
                  ref={/required/.test(val.state.activeTabName) ? val.refs.activeTab : val.refs.requiredTab}> 
                  {
                    val.state.errOccurred ?
                      <DisplayStatusMessage
                        typeofMsg='error'
                        errOccurred={val.state.errOccurred}
                        ref_type='required'
                        refIsLoading={val.state.refIsLoading}
                      />
                    : requiredRefExists ?
                        val.state.payload.refs.map((ref: any, key: number) => 
                          ref.ref_type === 'required' ? 
                          <Item
                            data={ref.data}
                            id={ref.id}
                            refs={ref.refs}
                            externLink={ref.url ? ref.url : null}
                            key={key}
                            handleReferenceClick={val.handleReferenceClick}
                            ref={val.refs.refItemWrapper}
                          />
                        : null)
                      : <DisplayStatusMessage 
                          typeofMsg='no-ref'
                          ref_type='required'
                          refIsLoading={val.state.refIsLoading}
                        />
                  }
                </ul>

                <ul className={`tab recommended-tab
                  ${/recommended/.test(val.state.activeTabName) ? 'active-tab' : ''}
                  ${!val.isViewedWithMobile ? 'useCustomScrollBar' : ''}`}
                  ref={/recommended/.test(val.state.activeTabName) ? val.refs.activeTab : val.refs.recommendedTab}>
                  {
                    val.state.errOccurred ?
                      <DisplayStatusMessage
                        typeofMsg='error'
                        errOccurred={val.state.errOccurred}
                        ref_type='recommended'
                        refIsLoading={val.state.refIsLoading}
                      />
                    : recommendedRefExists ?
                        val.state.payload.refs.map((ref: any, key: number) => 
                          ref.ref_type === 'recommended' ? 
                          <Item
                            data={ref.data}
                            id={ref.id}
                            refs={ref.refs}
                            externLink={ref.url ? ref.url : null}
                            key={key}
                            handleReferenceClick={val.handleReferenceClick}
                            ref={val.refs.refItemWrapper}
                          />
                        : null)
                      : <DisplayStatusMessage
                          typeofMsg='no-ref'
                          ref_type='recommended'
                          errOccurred=''
                          refIsLoading={val.state.refIsLoading}
                        />
                  }
                </ul>
                
                <ul className={`tab graph-tab
                  ${/graph/.test(val.state.activeTabName) ? 'active-tab' : ''}
                  ${!val.isViewedWithMobile ? 'useCustomScrollBar' : ''}`}
                  ref={/graph/.test(val.state.activeTabName) ? val.refs.activeTab : null}>
                  {
                    ifCanVisualizeGraph ? renderGraph
                      : <DisplayStatusMessage
                          typeofMsg='no-ref'
                          ref_type='graph'
                          errOccurred={val.state.errOccurred}
                          refIsLoading={val.state.refIsLoading}
                        />
                  }
                </ul>
              </div>
            </div>
          );
        }
      }
    </TabsContext.Consumer>
  );
  
});



export default Tabs;