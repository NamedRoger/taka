import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css'
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <App></App>
    </Router>
,document.getElementById('root'));