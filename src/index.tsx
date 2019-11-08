/**
 * To customize or configure widget, edit values in widgetconfig.json
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Widget from './Widget';
import './index.css';
import getThemeCSSText from './ThemeCSS';

import reducers from './redux/reducers';

export const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Widget />
  </Provider>,
  document.querySelector('#root')
);

let cssText = getThemeCSSText(),
    styleElement = document.createElement('style') as any;

if (styleElement.styleSheet)
  styleElement.styleSheet.cssText = cssText;
else 
  styleElement.appendChild(document.createTextNode(cssText));

document.head.appendChild(styleElement);
