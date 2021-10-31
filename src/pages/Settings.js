import React, { useEffect, useState } from "react";
import { __ } from "@wordpress/i18n";
import Loader from "../components/Loader";
import apiFetch from "@wordpress/api-fetch";
import InputField from "../components/Utils/InputField";
import SwitchField from "../components/Utils/SwitchField";

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

  useEffect(() => {
    setIsLoading(true);

    apiFetch({
      path: '/wavly/v1/settings',
      method: 'GET'
    }).then((response) => {
      setSettings(response);
      setIsLoading(false);
    }).finally(() => {});
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

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

    apiFetch({
      path: '/wavly/v1/settings',
      method: 'PUT',
      data: data,
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log( error )
      });
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
                    {__("Show Countdown", "woo-availability")}
                  </div>
                  <div className="mt-6">
                    <SwitchField
                      id={"enable_in_stock_countdown_timer"}
                      switchId={"enable_in_stock_countdown_timer_switch"}
                      label={__("Show Stock Countdown Timer", "woo-availability")}
                      tooltip={__(
                        "Enable this to show countdown timer for next available stock on single product",
                        "woo-availability"
                      )}
                      checked={settings.sale_timer.enabled}
                      onChange={(e) => handleSwitchChange(e, 'sale_timer')}
                    />
                  </div>

                  <div className="mt-6">
                    <SwitchField
                      id={"enable_sale_countdown_timer"}
                      switchId={"enable_sale_countdown_timer_switch"}
                      label={__("Show Sale Countdown Timer", "woo-availability")}
                      tooltip={__(
                        "Enable this to show countdown timer for sale duration on single product",
                        "woo-availability"
                      )}
                      checked={settings.stock_timer.enabled}
                      onChange={(e) => handleSwitchChange(e, 'stock_timer')}
                    />
                  </div>
                </div>

                <div className="mt-12">
                  <div className="uppercase tracking-widest text-gray-500 font-semibold">
                    {__("Timer title", "woo-availability")}
                  </div>

                  <div className="mt-6">
                    <div className="mt-6">
                      <InputField
                        id="sale_timer_tooltip"
                        label={__("Sale Timer Title", "woo-availability")}
                        tooltip={__(
                          "This text will show on the sale timer title",
                          "woo-availability"
                        )}
                        placeholder={__(
                          "Sale ends in:",
                          "woo-availability"
                        )}
                        value={settings.sale_timer.title}
                        onChange={(e) => handleInputChange(e, 'sale_timer')}
                      />
                    </div>

                    <div className="mt-6">
                      <InputField
                        id="notify_me_btn_text_tooltip"
                        label={__('Stock Timer Title', "woo-availability")}
                        tooltip={__(
                          "This text will show on the stock timer title",
                          "woo-availability"
                        )}
                        placeholder={__(
                          "Expected restock in:",
                          "woo-availability"
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
                      "bg-blue-900 text-white px-8 py-2 uppercase text-md font-medium rounded-md hover:shadow-md transition delay-100 ease-in-out"
                    }
                  >
                    {__("Save", "woo-availability")}
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
