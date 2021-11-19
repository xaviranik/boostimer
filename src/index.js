import React from 'react';
import ReactDOM from 'react-dom';
import menuFix from './utils/admin-menu-fix';

import App from './App';

import './styles/style.scss';
import 'react-toastify/dist/ReactToastify.css';

const mountNode = document.getElementById('boostimer-app');
ReactDOM.render(<App />, mountNode);

menuFix('boostimer');
