import React from 'react';
import {__} from "@wordpress/i18n";
import GoBack from "../components/Utils/GoBack";

const Home = () => {
  return (
    <div className="p-6">
      <div className="mt-12 flex items-center">
        <GoBack />
        <h1 className="text-2xl font-semibold text-gray-700 ml-4 tracking-wider">{__('Home', 'woo-availability')}</h1>
      </div>
    </div>
  );
}

export default Home;
