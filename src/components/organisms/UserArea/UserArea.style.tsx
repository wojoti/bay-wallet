import {StyleSheet} from 'react-native';
import {primary} from 'theme/colors';

const style = StyleSheet.create({
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
  bottomContent: {width: '85%', marginTop: 30},
});
export default style;
