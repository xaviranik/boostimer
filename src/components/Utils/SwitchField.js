import React from "react";
import {BsInfoCircle} from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import WooSwitch from "./WooSwitch";

const SwitchField = ({id, switchId, label, tooltip, checked}) => {
  return(
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col">
        <span className="text-md text-gray-400 flex items-center">
          {label}
          <span data-tip data-for={id} className="ml-2 cursor-pointer text-gray-400 hover:text-gray-700 transition delay-100 ease-out"><BsInfoCircle/></span>
        </span>
          <ReactTooltip id={id} className="rounded-md" type="dark" effect="solid" delayHide={100}>
            <span className="mt-2 text-white text-xs">{tooltip}</span>
          </ReactTooltip>
      </div>
      <WooSwitch id={switchId} checked={checked}/>
    </div>
  );
}

export default SwitchField;
