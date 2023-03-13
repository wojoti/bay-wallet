import {StyleSheet} from 'react-native';
import {buttonGrey, grey, primary, secondary} from 'theme/colors';

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: secondary,
  },
  top: {
    height: 70,
    marginBottom: 40,
  },
  button: {
    borderWidth: 0,
    width: 95,
    height: 45,
    backgroundColor: buttonGrey,
  },
  buttonFont: {
    color: grey,
    fontSize: 19,
  },

  pressedButton: {
    borderWidth: 0,
    width: 95,
    height: 45,
    backgroundColor: primary,
  },
  pressedButtonFont: {
    color: secondary,
    fontSize: 19,
  },

  topBtnRow: {
    marginBottom: 20,
  },
});
export default style;
