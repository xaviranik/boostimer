import React from 'react';
import {__} from "@wordpress/i18n";

const Home = () => {
  return (
    <div className="p-6">
      <div className="mt-12">
        <h1 className="text-2xl">{__('Home', 'woo-availability')}</h1>
      </div>
    </div>
  );
}

export default Home;
