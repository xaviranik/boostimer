import React from "react";

const WooSwitch = ({id, checked, onChange}) => {
  return(
    <label
      htmlFor={id}
      className="flex items-center cursor-pointer"
    >
      <div className="relative">
        <input onChange={onChange} id={id} type="checkbox" className="sr-only" defaultChecked={checked}/>
        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <div className="dot absolute w-6 h-6 bg-gray-100 rounded-full shadow -left-1 -top-1 transition"></div>
      </div>
    </label>
  );
}

export default WooSwitch;
