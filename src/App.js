import React from 'react';
import { __ } from "@wordpress/i18n";
import { hot } from 'react-hot-loader/root';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <div className="woo-availability-app">
        <div className="grid grid-cols-12 gap-0 min-h-screen bg-white shadow">
          <div className="col-span-2 bg-white">
            <Sidebar />
          </div>
          <div className="col-span-10 bg-base">
            <Switch>
              <Route path="/settings" component={Settings} />
              <Route path="/" exact component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default hot(App);
