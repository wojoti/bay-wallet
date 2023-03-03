import {StyleSheet} from 'react-native';
import {primary, secondary} from 'theme/colors';

const style = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    right: 0,
    bottom: 0,
    left: 0,
    paddingBottom: 45,
    backgroundColor: '#ffffffab',
  },
  whiteArea: {
    width: '85%',
    backgroundColor: secondary,
    borderRadius: 16,
    elevation: 10,
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  purpleButton: {
    bottom: 30,
    backgroundColor: primary,
    borderRadius: 45,
    padding: 20,
    elevation: 10,
  },
});
export default style;
