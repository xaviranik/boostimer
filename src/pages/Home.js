import React from "react";
import { __ } from "@wordpress/i18n";
import GoBack from "../components/Utils/GoBack";

const Home = () => {
  return (
    <div className="p-6 pt-0">
      <div className="flex items-center">
        <GoBack />
        <h1 className="text-2xl font-semibold text-gray-600 ml-4 tracking-wider">
          {__("Home", "boostimer")}
        </h1>
      </div>
    </div>
  );
};

export default Home;
