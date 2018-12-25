import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import './common/style/common.css';
import Router from './route';

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);
// 暂时不使用serviceworker
// registerServiceWorker();
