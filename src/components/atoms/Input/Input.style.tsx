import {StyleSheet} from 'react-native';
import {primary} from 'theme/colors';
import {font} from 'theme/fonts';

const style = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: primary,
    fontFamily: font,
    paddingLeft: 30,
    fontSize: 16,
  },
});
export default style;
