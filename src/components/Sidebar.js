import React from "react";
import { NavLink } from "react-router-dom";
import { __ } from "@wordpress/i18n";
import Logo from "./Utils/Logo";

const Sidebar = () => {
  return (
    <div className="p-6 flex flex-col items-center bg-white rounded-md shadow">
      <div className="mt-8">
        <Logo />
      </div>
      <div className="mt-10 mb-4 w-full grid grid-rows-1 gap-4">
        <NavLink
          className="outline-none text-gray-400 hover:text-gray-800 rounded-md px-6 py-3 flex items-center text-md uppercase tracking-wider focus:ring-0 text-gray-600 bg-gray-100 rounded-md shadow font-semibold"
          to={"/"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="ml-6">{__("Settings", "boostimer")}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
