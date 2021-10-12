import React from 'react';
import {__} from "@wordpress/i18n";
import WooSwitch from "../components/Utils/WooSwitch";

const Settings = () => {
  return (
    <div className="p-6">
      <div className="mt-12">
        <h1 className="text-2xl font-semibold">{__('Settings', 'woo-availability')}</h1>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <div className="bg-white p-6 shadow rounded-md">
              <div>
                <div className="text-md uppercase tracking-wider text-gray-400 font-light">{__('Countdown Timer', 'woo-availability')}</div>
                <div className="mt-4 flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <span className="text-md font-semibold">{__('Show Countdown Timer', 'woo-availability')}</span>
                    <span className="mt-2 text-gray-500 text-xs">{__('Enable this to show countdown timer on single product', 'woo-availability')}</span>
                  </div>
                  <WooSwitch id={"enable_countdown_timer"} checked={true} />
                </div>
              </div>

              <div className="mt-8">
                <div className="text-md uppercase tracking-wider text-gray-400 font-light">{__('Notify User', 'woo-availability')}</div>
                <div className="mt-4 flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <span className="text-md font-semibold">{__('Enable Notify User', 'woo-availability')}</span>
                    <span className="mt-2 text-gray-500 text-xs">{__('Enable this to show "notify me" button on single product page', 'woo-availability')}</span>
                  </div>
                  <WooSwitch id={"enable_notify_user"} checked={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
