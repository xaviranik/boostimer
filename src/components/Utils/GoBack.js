import React from "react";
import {useHistory} from "react-router-dom";
import { useLocation } from 'react-router-dom';

const GoBack = () => {
  const history = useHistory();
  const location = useLocation();

  const goBack = () => {
    if(location.pathname === '/') {
      return;
    }
    history.goBack();
  }

  return(
    <div>
      <button type="button" className={"border border-solid border-gray-300 text-2xl px-3 py-1 text-gray-300 rounded-md hover:bg-blue-900 hover:text-white transition delay-100 ease-in-out"} onClick={goBack}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
      </button>
    </div>
  );
}

export default GoBack;
