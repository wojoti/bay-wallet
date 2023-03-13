import {StyleSheet} from 'react-native';
import {primary, secondary} from 'theme/colors';

const style = StyleSheet.create({
  contentWithRadius: {
    backgroundColor: secondary,
    borderWidth: 1,
    borderColor: 'transparent',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 40,
  },
  sizer: {width: '85%'},
  button: {
    borderWidth: 0,
  },
  buttonFont: {
    color: primary,
    fontSize: 16,
  },
  receiverselector: {
    marginTop: 35,
  },
  send: {
    marginTop: 50,
    backgroundColor: primary,
    width: '100%',
  },
  sendFont: {
    color: secondary,
  },
});
export default style;
