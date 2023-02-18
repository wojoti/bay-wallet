import {StyleSheet} from 'react-native';
import {primary, secondary} from 'style/style';

interface Props {
  background: 'primary' | 'secondary';
}

const style = ({background}: Props) =>
  StyleSheet.create({
    wrapper: {
      width: '100%',
      height: '100%',
      backgroundColor:
        background === 'primary'
          ? primary
          : background === 'secondary'
          ? secondary
          : 'inherit',
    },
  });
export default style;
