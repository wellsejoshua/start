  //dependencies are in package.json file and are code bundle
  // builds make sure my code combined with the 3rd party code is something the browser can understand
// imported from package.json file
//!!!!!index.js is the first file to execute
import React from 'react';
//import reactDom objet from react dom library
import ReactDOM from 'react-dom/client';

import './index.css';
//this is from App.js and appears as ./App because the extension can be ommited
import App from './App';

//jxs code is javascript + html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    );


