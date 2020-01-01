import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {register} from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter  basename='/'>
        <App />
    </HashRouter>
    , document.getElementById('root'));
register();
