import {StyleSheet} from 'react-native';

interface Props {
  mainColor?: string;
}
const style = ({mainColor}: Props) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: mainColor,
    },
    content: {
      width: '85%',
    },
  });
export default style;
