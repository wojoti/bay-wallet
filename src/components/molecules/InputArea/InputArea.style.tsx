import {StyleSheet} from 'react-native';
import {secondary} from 'theme/colors';

const style = StyleSheet.create({
  fixedLabel: {
    flex: 0,
    width: 95,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    backgroundColor: secondary,
    alignItems: 'flex-start',
    top: 15,
    zIndex: 1,
  },
});
export default style;
