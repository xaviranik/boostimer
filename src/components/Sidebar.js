import React from 'react';
import {AiFillHome} from 'react-icons/Ai';
import {IoMdSettings} from 'react-icons/Io';
import {NavLink} from "react-router-dom";
import {__} from "@wordpress/i18n";
import Logo from "./Utils/Logo";

const Sidebar = () => {
  return (
    <div className="p-6 flex flex-col items-center">
      <div className="mt-12">
        <Logo/>
      </div>
      <div className="mt-20 w-full grid grid-rows-4 gap-4">
        <NavLink className="outline-none text-gray-400 hover:text-gray-800 rounded-md px-6 py-3 rounded-md flex items-center text-md uppercase" exact to={"/"} activeClassName={"text-gray-600 bg-gray-100 rounded-md shadow font-semibold"}>
          <AiFillHome />
          <span className="ml-6">{__('Home', 'woo-availability')}</span>
        </NavLink>

        <NavLink className="outline-none text-gray-400 hover:text-gray-800 rounded-md px-6 py-3 rounded-md flex items-center text-md uppercase" exact to={"/settings"} activeClassName={"text-gray-600 bg-gray-100 rounded-md shadow font-semibold"}>
          <IoMdSettings />
          <span className="ml-6">{__('Settings', 'woo-availability')}</span>
        </NavLink>

      </div>
    </div>
  );
}

export default Sidebar;
