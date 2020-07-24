import {Dimensions, Platform, NativeModules} from 'react-native';
export const {width, height} = Dimensions.get('window');

export const logy = (e) => {
  if (__DEV__) {
    console.log(e);
  } else {
    if (e.response && e.response.status) {
      let code = e.response.status;
      if (code === 403 || code === 404 || code === 406 || code === 409) {
        return;
      }
    }
    //   Sentry.captureException(e);
  }
};
