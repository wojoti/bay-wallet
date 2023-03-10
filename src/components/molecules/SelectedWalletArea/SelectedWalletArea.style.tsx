import {StyleSheet} from 'react-native';
import {secondary} from 'theme/colors';

const style = StyleSheet.create({
  wrapper: {
    width: '85%',
    marginBottom: 30,
  },
  button: {
    borderWidth: 0,
    height: 'auto',
  },
  buttonFont: {
    color: secondary,
    fontSize: 15,
    fontWeight: 'normal',
  },
});
export default style;
