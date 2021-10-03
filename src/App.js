import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { __ } from "@wordpress/i18n";

import Home from './pages/Home';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="woo-availability-app">
        <div className="wrap">
          <a href={"#/"} className="header-link" title={__('Home', 'woo-availability')}>
            <span className="dashicons dashicons-admin-home"/>
            <span className="title">{__('Home', 'woo-availability')}</span>
          </a>
          <a href={"#/settings"} className="header-link" title={__('Settings', 'woo-availability')}>
            <span className="dashicons dashicons-admin-home"/>
            <span className="title">{__('Settings', 'woo-availability')}</span>
          </a>
          <Switch>
            <Route path="/settings" component={Settings} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default hot(App);
