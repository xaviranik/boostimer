import React from 'react';
import {__} from "@wordpress/i18n";
import ReactTooltip from 'react-tooltip';
import WooSwitch from "../components/Utils/WooSwitch";
import {BsInfoCircle} from 'react-icons/Bs';

const Settings = () => {
  return (
    <div className="p-6">
      <div className="mt-12">
        <h1 className="text-2xl font-semibold">{__('Settings', 'woo-availability')}</h1>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <div className="bg-white p-8 shadow rounded-md">
              <div>
                <div className="text-md uppercase tracking-widest text-gray-400 font-light">{__('Countdown Timer', 'woo-availability')}</div>
                <div className="mt-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <span className="text-md font-semibold flex items-center">
                        {__('Show Countdown Timer', 'woo-availability')}
                        <span data-tip data-for='enable_counter_timer_tooltip' className="ml-2 cursor-pointer text-gray-400 hover:text-gray-700 transition delay-100 ease-out"><BsInfoCircle /></span>
                      </span>
                      <ReactTooltip id='enable_counter_timer_tooltip' className="rounded-md" type="dark" effect="solid" delayHide={200}>
                        <span className="mt-2 text-gray-400 text-xs">{__('Enable this to show countdown timer on single product', 'woo-availability')}</span>
                      </ReactTooltip>
                    </div>
                    <WooSwitch id={"enable_countdown_timer"} checked={true}/>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="text-md uppercase tracking-widest text-gray-400 font-light">{__('Notify User', 'woo-availability')}</div>

                <div className="mt-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <span className="text-md font-semibold flex items-center">
                        {__('Enable Notify User', 'woo-availability')}
                        <span data-tip data-for='enable_notify_user_tooltip' className="ml-2 cursor-pointer text-gray-400 hover:text-gray-700 transition delay-100 ease-out"><BsInfoCircle /></span>
                      </span>
                      <ReactTooltip id='enable_notify_user_tooltip' className="rounded-md" type="dark" effect="solid" delayHide={100}>
                        <span className="mt-2 text-gray-400 text-xs">{__('Enable this to show "notify me" button on single product page', 'woo-availability')}</span>
                      </ReactTooltip>
                    </div>
                    <WooSwitch id={"enable_notify_user"} checked={false} />
                  </div>

                  <div className="mt-6 flex flex-col justify-center">
                    <div className="flex flex-col">
                      <span className="text-md font-semibold flex items-center">
                        {__('Success Enrollment Message', 'woo-availability')}
                        <span data-tip data-for='success_enroll_tooltip' className="ml-2 cursor-pointer text-gray-400 hover:text-gray-700 transition delay-100 ease-out"><BsInfoCircle /></span>
                      </span>
                      <ReactTooltip id='success_enroll_tooltip' className="rounded-md" type="dark" effect="solid" delayHide={100}>
                        <span className="mt-2 text-gray-400 text-xs">{__('This message will be displayed when a user successfully enrolls for the availability notification', 'woo-availability')}</span>
                      </ReactTooltip>
                      <input className="woo-availability-input" type="text" placeholder={__('You are enrolled successfully to get notified for stock availability!', 'woo-availability')} defaultValue={__('You are enrolled successfully to get notified for stock availability!', 'woo-availability')}/>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col justify-center">
                    <div className="flex flex-col">
                      <span className="text-md font-semibold flex items-center">
                        {__('"Notify Me" Button Text', 'woo-availability')}
                        <span data-tip data-for='notify_me_btn_text_tooltip' className="ml-2 cursor-pointer text-gray-400 hover:text-gray-700 transition delay-100 ease-out"><BsInfoCircle /></span>
                      </span>
                      <ReactTooltip id='notify_me_btn_text_tooltip' className="rounded-md" type="dark" effect="solid" delayHide={100}>
                        <span className="mt-2 text-gray-400 text-xs">{__('This text will be displayed on an enrollment button on a product page', 'woo-availability')}</span>
                      </ReactTooltip>
                      <input className="woo-availability-input" type="text" placeholder={__('Notify me!', 'woo-availability')} defaultValue={__('Notify me!', 'woo-availability')}/>
                    </div>
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
