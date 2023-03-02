import {StyleSheet} from 'react-native';
import {boldFont} from 'theme/fonts';

const style = StyleSheet.create({
  wrapper: {
    height: 65,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
});
export const fontStyle = StyleSheet.create({
  wrapper: {
    textAlign: 'center',
    fontFamily: boldFont,
    fontSize: 18,
  },
});
export default style;
