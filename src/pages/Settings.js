import React from 'react';
import {__} from "@wordpress/i18n";
import InputField from "../components/Utils/InputField";
import SwitchField from "../components/Utils/SwitchField";
import GoBack from "../components/Utils/GoBack";

const Settings = () => {
  return (
    <div className="p-6">
      <div className="mt-12 flex items-center">
        <GoBack />
        <h1 className="text-2xl font-semibold text-gray-600 ml-4">{__('Settings', 'woo-availability')}</h1>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <div className="bg-white p-8 shadow rounded-md">
              <div>
                <div className="text-md uppercase tracking-widest text-gray-500 font-semibold">{__('Countdown Timer', 'woo-availability')}</div>
                <div className="mt-4">
                  <SwitchField id={"enable_countdown_timer"}
                               switchId={"enable_countdown_timer_switch"}
                               label={__('Show Countdown Timer', 'woo-availability')}
                               tooltip={__('Enable this to show countdown timer on single product', 'woo-availability')}
                               checked={true}/>
                </div>
              </div>

              <div className="mt-12">
                <div className="text-md uppercase tracking-widest text-gray-500 font-semibold">{__('Notify User', 'woo-availability')}</div>

                <div className="mt-4">
                  <SwitchField id={"enable_notify_user"}
                               switchId={"enable_notify_user_switch"}
                               label={__('Enable Notify User', 'woo-availability')}
                               tooltip={__('Enable this to show "notify me" button on single product page', 'woo-availability')}
                               checked={false}/>

                  <div className="mt-6">
                    <InputField id="success_enroll_tooltip"
                                label={__('Success Enrollment Message', 'woo-availability')}
                                tooltip={__('This message will be displayed when a user successfully enrolls for the availability notification', 'woo-availability')}
                                placeholder={__('You are enrolled successfully to get notified for stock availability!', 'woo-availability')}
                                value={__('You are enrolled successfully to get notified for stock availability!', 'woo-availability')}/>
                  </div>

                  <div className="mt-6">
                    <InputField id="notify_me_btn_text_tooltip"
                                label={__('"Notify Me" Button Text', 'woo-availability')}
                                tooltip={__('This text will be displayed on an enrollment button on a product page', 'woo-availability')}
                                placeholder={__('Notify me!', 'woo-availability')}
                                value={__('Notify me!', 'woo-availability')}/>
                  </div>
                </div>
              </div>

              <div className={"mt-12"}>
                <button className={"bg-blue-900 text-white px-8 py-2 uppercase text-md rounded-md hover:shadow-md transition delay-100 ease-in-out"}>{__('Save', 'woo-availability')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
