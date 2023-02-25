import {StyleSheet} from 'react-native';

interface textProps {
  color?: string;
  bold?: boolean;
  align?: 'left' | 'auto' | 'right' | 'center' | 'justify';
}
export const textStyle = ({color, bold, align}: textProps) =>
  StyleSheet.create({
    text: {
      color: color || 'black',
      fontWeight: bold ? 'bold' : '400',
      textAlign: align || 'left',
    },
  });

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: 'none',
    borderColor: 'none',
  },
});
export default style;
