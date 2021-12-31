import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Router>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
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
            <Routes>
              <Route path="/" element={<Settings/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
