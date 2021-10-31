import React from "react";
import ReactTooltip from "react-tooltip";
import WooSwitch from "./WooSwitch";

const SwitchField = ({id, switchId, label, tooltip, checked, onChange}) => {
  const getSwitchStatus = (status) => {
    if (typeof status === "boolean") {
      return status;
    }
    return 'yes' === status;
  }

  return(
    <div className="flex items-center justify-between w-full">
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
      </div>
      <WooSwitch onChange={onChange} id={switchId} checked={getSwitchStatus(checked)}/>
    </div>
  );
}

export default SwitchField;
