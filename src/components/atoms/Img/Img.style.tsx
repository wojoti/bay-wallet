import {StyleSheet} from 'react-native';

interface Props {
  width: number;
  height: number;
}
const style = ({width, height}: Props) =>
  StyleSheet.create({
    wrapper: {
      margin: 0,
      padding: 0,
      width: width,
      height: height,
    },
  });
export default style;
