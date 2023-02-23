import {StyleSheet} from 'react-native';

interface textProps {
  color?: string;
  bold?: boolean;
  align?: 'left' | 'auto' | 'right' | 'center' | 'justify' | undefined;
}
export const textStyle = ({color, bold, align}: textProps) =>
  StyleSheet.create({
    text: {
      margin: 0,
      padding: 0,
      color: color || 'black',
      fontWeight: bold ? 'bold' : '400',
      textAlign: align || 'left',
    },
  });

const style = StyleSheet.create({
  wrapper: {
    margin: 0,
    padding: 0,
    backgroundColor: 'none',
    borderColor: 'none',
  },
});
export default style;
