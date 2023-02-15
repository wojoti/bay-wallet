import {StyleSheet} from 'react-native';
import {mainColor} from 'style/style';

interface Props {
  background: 'main' | 'white';
}

const style = ({background}: Props) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: background === 'main' ? mainColor : 'white',
    },
  });
export default style;
