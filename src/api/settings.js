import BoostApi from "./index";

const endpoint = 'settings';

const GET_SETTINGS = async () => {
  return await BoostApi.get(endpoint);
}

const UPDATE_SETTINGS = async (data) => {
  return await BoostApi.put(endpoint, data);
}

export {GET_SETTINGS, UPDATE_SETTINGS};
