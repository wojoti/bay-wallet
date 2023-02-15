import {StyleSheet} from 'react-native';
import {primaryColor, secondaryColor} from 'style/style';

interface Props {
  background: 'primary' | 'secondary';
}

const style = ({background}: Props) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor:
        background === 'primary'
          ? primaryColor
          : background === 'secondary'
          ? secondaryColor
          : 'inherit',
    },
  });
export default style;
