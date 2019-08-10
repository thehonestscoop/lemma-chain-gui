import React from 'react';
// import { Props } from './Dropdown';
import { getCSSProps } from '../ThemeCSS';
import widgetconfig from '../widgetconfig.json';
import { TabLinksContext } from '../context';




const TabLinks: any = React.forwardRef((unUsedProps: any, unUsedRef: any) =>
{
  return (
    <TabLinksContext.Consumer>
      {(props: any) => (
        <div className='tab-links-wrapper' style={{height: props.state.dropdownIsCollapsed ? 0 : 48, 
          maxWidth: widgetconfig.widgetMaxWidth}}>
          <button
            className='back-btn'
            title='Previous Ref'
            onClick={props.goBackInTime}
            style={{width: props.state.historyExists ? 55 : 0}}
          >❮</button>
          <button
            className={`required-tab-link tab-link 
              ${/required/.test(props.state.activeTabName) ? 'active-tab-link' : ''}`}
            title='Required references'
            data-tab-name='required-tab'
            onClick={props.handleTabToggle}
            ref={/required/.test(props.state.activeTabName) ? props.ref.activeTabLink : null}
          >Required</button>
          <button
            className={`recommended-tab-link tab-link 
              ${/recommended/.test(props.state.activeTabName) ? 'active-tab-link' : ''}`}
            title='Recommended references'
            data-tab-name='recommended-tab'
            onClick={props.handleTabToggle}
            ref={/recommended/.test(props.state.activeTabName) ? props.ref.activeTabLink : null}
          >Recommended</button>
          <button
            className={`graph-tab-link tab-link
              ${/graph/.test(props.state.activeTabName) ? 'active-tab-link' : ''}`}
            title='View graph'
            data-tab-name='graph-tab'
            style={{background: /graph/.test(props.state.activeTabName) ? getCSSProps().graphTablinkHoverBg : ''}}
            onClick={props.handleTabToggle}
            ref={/graph/.test(props.state.activeTabName) ? props.ref.activeTabLink : null}
          >★</button>
        </div>
      )}
    </TabLinksContext.Consumer>
  )
});



export default TabLinks;


// {
//   "compilerOptions": {
//     "target": "es5",
//     "lib": [
//       "dom",
//       "dom.iterable",
//       "esnext"
//     ],
//     "allowJs": true,
//     "skipLibCheck": true,
//     "esModuleInterop": true,
//     "allowSyntheticDefaultImports": true,
//     "strict": true,
//     "forceConsistentCasingInFileNames": true,
//     "module": "esnext",
//     "moduleResolution": "node",
//     "resolveJsonModule": true,
//     "isolatedModules": true,
//     "noEmit": true,
//     "jsx": "preserve",
//     "noImplicitAny": true,
//     "outDir": "dist"
//   },
//   "include": [
//     "src/**/*"
//   ],
//   "exclude": [
//     "node_modules"
//   ]
// }