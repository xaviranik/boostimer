import React from "react";
import { __ } from "@wordpress/i18n";
import { hot } from "react-hot-loader/root";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <div className="woo-availability-app text-gray-700 m-auto max-w-full xl:max-w-7xl mt-12">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-9">
            <Switch>
              <Route path="/settings" component={Settings} />
              <Route path="/" exact component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default hot(App);
