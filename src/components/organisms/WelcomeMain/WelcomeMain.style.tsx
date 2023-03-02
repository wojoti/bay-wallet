import {StyleSheet} from 'react-native';
import {primary, secondary} from 'theme/colors';

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: primary,
  },
  content: {
    width: '85%',
  },

  btnStyle: {
    borderWidth: 0,
    backgroundColor: secondary,
  },
  btnTextStyle: {
    color: 'black',
  },
});

export default style;
