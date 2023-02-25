import {StyleSheet} from 'react-native';
import {defaultWeight, font} from 'theme/fonts';

interface Props {
  color?: string;
  size?: number;
  align?: 'left' | 'auto' | 'right' | 'center' | 'justify';
}
const style = ({color, size, align}: Props) =>
  StyleSheet.create({
    wrapper: {
      color: color || 'black',
      textAlign: align || 'left',
      fontSize: size || 14,
      fontFamily: font,
      fontWeight: defaultWeight,
    },
  });
export default style;
