import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Home';
import Browse from './browse';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import { BrowserRouter } from 'react-router-dom';
import App2 from './routing';

ReactDOM.render(
  <BrowserRouter> 
    <App2 /> 
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
