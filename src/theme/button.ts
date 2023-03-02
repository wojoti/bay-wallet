import {StyleSheet} from 'react-native';
import {primary, secondary} from './colors';
const buttonStyle = StyleSheet.create({
  primary: {
    borderWidth: 0,
    backgroundColor: primary,
  },
  secondary: {
    borderColor: primary,
    backgroundColor: secondary,
  },
});

export const buttonTextStyle = StyleSheet.create({
  primary: {
    color: secondary,
  },
  secondary: {
    color: primary,
  },
});

export default buttonStyle;
