import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { Globalstyle } from './style'
import { IconFont } from './statics/iconfont/iconfont'
import App from './App';

ReactDOM.render(
  <>
    <Globalstyle />
    <IconFont />
    <App />
  </>,
  document.getElementById('root')
);

