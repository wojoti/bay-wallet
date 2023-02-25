import {StyleSheet} from 'react-native';

interface Props {
  width: number | string;
  height: number | string;
}
const style = ({width, height}: Props) =>
  StyleSheet.create({
    wrapper: {
      width: width,
      height: height,
    },
  });
export default style;
