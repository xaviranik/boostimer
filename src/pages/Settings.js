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
                <div className="text-md uppercase tracking-widest text-gray-400 font-light">{__('Countdown Timer', 'woo-availability')}</div>
                <div className="mt-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <span className="text-md font-semibold">{__('Show Countdown Timer', 'woo-availability')}</span>
                      <span className="mt-2 text-gray-400 text-xs">{__('Enable this to show countdown timer on single product', 'woo-availability')}</span>
                    </div>
                    <WooSwitch id={"enable_countdown_timer"} checked={true}/>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="text-md uppercase tracking-widest text-gray-400 font-light">{__('Notify User', 'woo-availability')}</div>
                <div className="mt-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <span className="text-md font-semibold">{__('Enable Notify User', 'woo-availability')}</span>
                      <span className="mt-2 text-gray-400 text-xs">{__('Enable this to show "notify me" button on single product page', 'woo-availability')}</span>
                    </div>
                    <WooSwitch id={"enable_notify_user"} checked={false} />
                  </div>
                  <div className="mt-4 flex flex-col justify-center">
                    <span className="text-md font-semibold">{__('Success Enrollment Message', 'woo-availability')}</span>
                    <span className="mt-2 text-gray-400 text-xs">{__('This message will be displayed when a user successfully enrolls for the availability notification', 'woo-availability')}</span>
                    <input className="mt-2 outline-none border-2 border-solid border-gray-400 px-4 py-2" type="text" placeholder={__('You are enrolled successfully to get notified for stock availability!', 'woo-availability')} defaultValue={__('You are enrolled successfully to get notified for stock availability!', 'woo-availability')}/>
                  </div>
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
