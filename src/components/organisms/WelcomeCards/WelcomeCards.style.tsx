import {StyleSheet} from 'react-native';
import {primary, secondary} from 'theme/colors';

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: primary,
  },
  contentWithRadius: {
    backgroundColor: secondary,
    borderWidth: 0,
    borderColor: 'transparent',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  cardSizer: {
    width: '100%',
    alignItems: 'center',
  },
  pagination: {
    justifyContent: 'flex-start',
    left: 28,
    bottom: 80,
  },
});
export default style;
