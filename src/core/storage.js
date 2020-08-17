import AsyncStorage from '@react-native-community/async-storage';
import {logy, getDeviceInfo} from './constants';

export const disableOnboarding = async () => {
  try {
    await AsyncStorage.setItem('@kv:displayOnboarding', '0');
  } catch (e) {
    logy(e);
  }
};

export const setDeviceInfo = async () => {
  try {
    await AsyncStorage.setItem('@kv:deviceId', getDeviceInfo);
  } catch (e) {
    logy(e);
    //todo how to handle stuff
  }
};

export const enbableOnboarding = async () => {
  try {
    await AsyncStorage.setItem('@kv:displayOnboarding', '1');
  } catch (e) {
    logy(e);
    //todo how to handle stuff
  }
};

export const getOnboardingState = async () => {
  let onboardingState = true;
  try {
    const value = await AsyncStorage.getItem('@kv:displayOnboarding');
    if (value !== null) {
      onboardingState = value === '1' ? true : false;
    }
  } catch (e) {
    // error reading value
    logy(e);
  }
  return onboardingState;
};

export const saveUser = async (user) => {
  user.api = true;
  try {
    await AsyncStorage.setItem('@kv:user', JSON.stringify(user));
  } catch (e) {
    logy(e);
  }
};

export const getUser = async () => {
  let user = {};
  try {
    const userStorage = await AsyncStorage.getItem('@kv:user');
    if (userStorage !== null) {
      user = JSON.parse(userStorage);
    }
  } catch (e) {
    logy(e);
  }
  return user;
};

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem('@kv:user');
  } catch (e) {
    logy(e);
  }
};
