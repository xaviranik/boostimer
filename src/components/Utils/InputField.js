import React from "react";
import ReactTooltip from "react-tooltip";

const InputField = ({id, label, tooltip, placeholder, value, onChange}) => {
  return(
    <div className="flex flex-col justify-center">
      <div className="flex flex-col">
        <span className="text-md text-gray-400 flex items-center">
          {label}
          <span data-tip data-for={id} className="ml-2 cursor-pointer text-gray-400 hover:text-gray-700 transition delay-100 ease-out">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </span>
        <ReactTooltip id={id} className="rounded-md" type="dark" effect="solid" delayHide={100}>
          <span className="mt-2 text-white text-xs">{tooltip}</span>
        </ReactTooltip>
        <input onChange={onChange} className="woo-availability-input" type="text" placeholder={placeholder} defaultValue={value}/>
      </div>
    </div>
  );
}

export default InputField;
