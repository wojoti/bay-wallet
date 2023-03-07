import {StyleSheet} from 'react-native';
import {iconGrey, primary} from 'theme/colors';

const style = StyleSheet.create({
  button: {
    borderWidth: 0,
    marginRight: 20,
  },
  pressed: {
    color: primary,
  },
  notPressed: {
    color: iconGrey,
  },
});
export default style;
