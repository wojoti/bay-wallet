import {StyleSheet} from 'react-native';
import {boldFont} from 'theme/fonts';

interface Props {
  color?: string;
  size?: number;
  align?: 'left' | 'auto' | 'right' | 'center' | 'justify';
  spacing?: number;
}
const style = ({color, size, align, spacing}: Props) =>
  StyleSheet.create({
    wrapper: {
      color: color || 'black',
      textAlign: align || 'left',
      fontSize: size || 24,
      fontFamily: boldFont,
      letterSpacing: spacing,
    },
  });
export default style;
