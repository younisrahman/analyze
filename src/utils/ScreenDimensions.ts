import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';

const getDeviceWidth = () => {
  return Dimensions.get('window').width;
};
const getDeviceHeight = () => {
  return Dimensions.get('window').height;
};

const isIPhoneXorAbove = () => {
  return Platform.OS === 'ios' && getDeviceHeight() >= 812;
};

const StatusBarHeight = Platform.select({
  ios: isIPhoneXorAbove() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0,
});

const getDeviceSize = () => {
  return {
    width: getDeviceWidth(),
    height: getDeviceHeight(),
  };
};

const getDeviceOrientation = () => {
  return getDeviceWidth() > getDeviceHeight() ? 'landscape' : 'portrait';
};

const hp = (heightPercent: number | string) => {
  const elemWidth =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(
    ((getDeviceHeight() - StatusBarHeight) * elemWidth) / 100
  );
};

const wp = (widthPercent: number | string) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((getDeviceWidth() * elemWidth) / 100);
};

export {
  getDeviceWidth,
  getDeviceHeight,
  getDeviceSize,
  getDeviceOrientation,
  hp,
  wp,
};
