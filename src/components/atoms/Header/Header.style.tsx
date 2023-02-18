import {StyleSheet} from 'react-native';
import {boldFont} from 'style/style';

interface Props {
  color?: string;
  size?: number;
  align?: 'left' | 'auto' | 'right' | 'center' | 'justify' | undefined;
}
const style = ({color, size, align}: Props) =>
  StyleSheet.create({
    wrapper: {
      margin: 0,
      padding: 0,
      color: color || 'black',
      textAlign: align || 'left',
      fontSize: size || 24,
      fontFamily: boldFont,
    },
  });
export default style;
