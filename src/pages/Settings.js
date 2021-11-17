import React, { useEffect, useState } from "react";
import { __ } from "@wordpress/i18n";
import { toast } from 'react-toastify';
import Loader from "../components/Loader";
import InputField from "../components/Utils/InputField";
import SwitchField from "../components/Utils/SwitchField";
import {
  GET_SETTINGS,
  UPDATE_SETTINGS
} from "../api/settings";

const Settings = () => {
  const settingsSchema = {
    sale_timer: {
      title: '',
      enabled: 0,
    },
    stock_timer: {
      title: '',
      enabled: 0,
    },
  };

  const [settings, setSettings] = useState(settingsSchema);
  const [isLoading, setIsLoading] = useState(true);
  const [iSSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    GET_SETTINGS().then((response) => {
      setSettings(response);
      setIsLoading(false);
    }).finally(() => {});
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSaving(true);

    const data = {
      sale_timer: {
        title: settings.sale_timer.title,
        enabled: settings.sale_timer.enabled,
      },
      stock_timer: {
        title: settings.stock_timer.title,
        enabled: settings.stock_timer.enabled,
      },
    };

    toast.promise(
      UPDATE_SETTINGS(data),
      {
        pending: {
          render() {
            return __('Saving settings', 'boostimer');
          },
        },
        success: {
          render({data}) {
            return data.message ? data.message : __('Settings have been updated successfully', 'boostimer');
          },
        },
        error: {
          render({data}) {
            return data.message ? data.message : __('Settings could not be saved. Something went wrong', 'boostimer');
          }
        }
      }
    ).finally(()  => setIsSaving(false));
  };

  const handleSwitchChange = (e, key) => {
    setSettings({
      ...settings,
      [key]: {
        title: settings[key]['title'],
        enabled: e.target.checked
      }
    });
  }

  const handleInputChange = (e, key) => {
    setSettings({
      ...settings,
      [key]: {
        title: e.target.value,
        enabled: settings[key]['enabled']
      }
    });
  }


  return (
    <div className="p-6 pt-0">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <div className="bg-white p-8 shadow rounded-md">
            {isLoading ? (
              <Loader />
            ) : (
              <div>
                <div>
                  <div className="uppercase tracking-widest text-gray-500 font-semibold">
                    {__("Show Countdown", "boostimer")}
                  </div>

                  <div className="mt-6">
                    <SwitchField
                      id={"enable_sale_countdown_timer"}
                      switchId={"enable_sale_countdown_timer_switch"}
                      label={__("Show Sale Countdown Timer", "boostimer")}
                      tooltip={__(
                        "Enable this to show countdown timer for sale duration on single product",
                        "boostimer"
                      )}
                      checked={settings.sale_timer.enabled}
                      onChange={(e) => handleSwitchChange(e, 'sale_timer')}
                    />
                  </div>
                </div>

                  <div className="mt-6">
                    <SwitchField
                      id={"enable_in_stock_countdown_timer"}
                      switchId={"enable_in_stock_countdown_timer_switch"}
                      label={__("Show Stock Countdown Timer", "boostimer")}
                      tooltip={__(
                        "Enable this to show countdown timer for next available stock on single product",
                        "boostimer"
                      )}
                      checked={settings.stock_timer.enabled}
                      onChange={(e) => handleSwitchChange(e, 'stock_timer')}
                    />
                  </div>

                <div className="mt-12">
                  <div className="uppercase tracking-widest text-gray-500 font-semibold">
                    {__("Timer title", "boostimer")}
                  </div>

                  <div className="mt-6">
                    <div className="mt-6">
                      <InputField
                        id="sale_timer_tooltip"
                        label={__("Sale Timer Title", "boostimer")}
                        tooltip={__(
                          "This text will show on the sale timer title",
                          "boostimer"
                        )}
                        placeholder={__(
                          "Sale ends in:",
                          "boostimer"
                        )}
                        value={settings.sale_timer.title}
                        onChange={(e) => handleInputChange(e, 'sale_timer')}
                      />
                    </div>

                    <div className="mt-6">
                      <InputField
                        id="notify_me_btn_text_tooltip"
                        label={__('Stock Timer Title', "boostimer")}
                        tooltip={__(
                          "This text will show on the stock timer title",
                          "boostimer"
                        )}
                        placeholder={__(
                          "Expected restock in:",
                          "boostimer"
                        )}
                        value={settings.stock_timer.title}
                        onChange={(e) => handleInputChange(e, 'stock_timer')}
                      />
                    </div>
                  </div>
                </div>

                <div className={"mt-12"}>
                  <button
                    onClick={handleSubmit}
                    className={
                      `bg-gray-800 text-white px-8 py-2 uppercase text-md font-medium rounded-md hover:shadow-md transition delay-100 ease-in-out ${iSSaving ? 'opacity-50' : ''}`
                    }
                    disabled={iSSaving}
                  >
                    {__("Save", "boostimer")}
                  </button>
                </div>
              </div>
            )
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
