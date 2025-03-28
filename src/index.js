import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from 'jquery';
//import './index.css';
import App from './app/App';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


var cors = require('cors')




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


