import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import myStore from './store/index'
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
