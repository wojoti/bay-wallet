import {StyleSheet} from 'react-native';
import {buttonGrey, primary} from 'theme/colors';

const style = StyleSheet.create({
  wrapper: {
    width: 'auto',
    marginRight: 20,
  },
  button: {
    backgroundColor: buttonGrey,
    borderRadius: 8,
    width: 60,
    height: 60,
  },
  buttonPressed: {
    backgroundColor: primary,
    borderRadius: 8,
    width: 60,
    height: 60,
  },
  spacing: {
    marginVertical: 10,
  },
});
export default style;
