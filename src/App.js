import React from "react";
import { hot } from "react-hot-loader/root";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Router>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="boostimer-app text-gray-700 m-auto max-w-full xl:max-w-7xl mt-12">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-9">
            <Switch>
              <Route path="/" component={Settings} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default hot(App);
