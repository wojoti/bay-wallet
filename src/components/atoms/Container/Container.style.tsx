import {StyleSheet} from 'react-native';

interface Props {
  background: 'primary' | 'secondary';
}

const style = ({background}: Props) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: background,
    },
  });
export default style;
