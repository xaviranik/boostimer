import apiFetch from "@wordpress/api-fetch";

const base = 'boostimer';
const version = 'v1';

const BoostApi = {
  get: (endpoint) => {
    return apiFetch({
      path: `/${base}/${version}/${endpoint}`,
      method: 'GET'
    });
  },

  put: (endpoint, data) => {
    return apiFetch({
      path: `/${base}/${version}/${endpoint}`,
      method: 'PUT',
      data: data,
    })
  },
};

export default BoostApi;
