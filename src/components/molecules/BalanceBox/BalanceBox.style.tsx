import {StyleSheet} from 'react-native';
import {balanceWhite, darkPurple} from 'theme/colors';

const style = StyleSheet.create({
  balanceBoxSizer: {
    width: '93%',
    marginTop: 35,
  },
  balanceBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundBox: {
    width: '100%',
    height: 102,
    backgroundColor: darkPurple,
    borderRadius: 12,
    position: 'absolute',
  },
  whiteBox: {
    backgroundColor: balanceWhite,
    height: 140,
    width: '92%',
    borderRadius: 12,
    paddingVertical: 14,
    paddingLeft: 22,
    paddingRight: 18,
  },
  width: {
    width: 90,
  },
});
export default style;
