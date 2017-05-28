import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


let apiURL = 'http://localhost:8000';


ReactDOM.render(
     <App apiURL={apiURL}/>,
      document.getElementById('root')
    );