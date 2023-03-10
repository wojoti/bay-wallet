import {StyleSheet} from 'react-native';
import {secondary} from 'theme/colors';

const style = StyleSheet.create({
  contentWithRadius: {
    backgroundColor: secondary,
    borderWidth: 1,
    borderColor: 'transparent',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 40,
  },
});
export default style;
