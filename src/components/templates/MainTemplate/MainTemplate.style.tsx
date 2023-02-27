import {StyleSheet} from 'react-native';
import {primary, secondary} from 'theme/colors';

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: secondary,
    height: '100%',
  },
  contentWithRadius: {
    backgroundColor: primary,
    borderWidth: 0,
    borderColor: 'transparent',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  topContent: {marginTop: 60, width: '85%'},
  balanceBoxSizer: {
    width: '93%',
    marginTop: 35,
  },
  width: {width: '85%'},
});
export default style;
