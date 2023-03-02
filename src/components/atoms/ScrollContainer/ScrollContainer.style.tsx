import {StyleSheet} from 'react-native';

interface Props {
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flex?: number;
  direction?: 'row' | 'column';
}
const style = ({justify, align, flex, direction}: Props) =>
  StyleSheet.create({
    wrapper: {
      justifyContent: justify || 'flex-start',
      alignItems: align || 'stretch',
      flex: flex,
      flexDirection: direction || 'column',
      width: '100%',
    },
  });
export default style;
