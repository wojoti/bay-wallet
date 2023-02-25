import {StyleSheet} from 'react-native';
import {darkGrey, iconGrey, secondary} from 'theme/colors';

const style = StyleSheet.create({
  MaxWidthDiv: {
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
  },
  GreyLineDiv: {
    height: 1,
    width: '100%',
    backgroundColor: iconGrey,
  },
  StyledText: {
    backgroundColor: secondary,
    fontSize: 14,
    color: darkGrey,
    zIndex: 1,
    top: -13,
    paddingHorizontal: 10,
  },
});
export default style;
