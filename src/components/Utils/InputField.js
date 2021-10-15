import React from "react";
import {BsInfoCircle} from "react-icons/bs";
import ReactTooltip from "react-tooltip";

const InputField = ({id, label, tooltip, placeholder, value}) => {
  return(
    <div className="flex flex-col justify-center">
      <div className="flex flex-col">
        <span className="text-md text-gray-400 flex items-center">
          {label}
          <span data-tip data-for={id} className="ml-2 cursor-pointer text-gray-400 hover:text-gray-700 transition delay-100 ease-out"><BsInfoCircle /></span>
        </span>
        <ReactTooltip id={id} className="rounded-md" type="dark" effect="solid" delayHide={100}>
          <span className="mt-2 text-white text-xs">{tooltip}</span>
        </ReactTooltip>
        <input className="woo-availability-input" type="text" placeholder={placeholder} defaultValue={value}/>
      </div>
    </div>
  );
}

export default InputField;
