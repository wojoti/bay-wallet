import {StyleSheet} from 'react-native';

interface Props {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline'
    | undefined;
  background?: string;
  flex?: number;
}
const style = ({
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  justify,
  align,
  background,
  flex,
}: Props) =>
  StyleSheet.create({
    wrapper: {
      marginTop: mt || 0,
      marginBottom: mb || 0,
      marginLeft: ml || 0,
      marginRight: mr || 0,
      paddingTop: pt || 0,
      paddingBottom: pb || 0,
      paddingLeft: pl || 0,
      paddingRight: pr || 0,
      backgroundColor: background || 'inherit',
      justifyContent: justify || 'flex-start',
      alignItems: align || 'flex-start',
      flex: flex || 0,
    },
  });
export default style;
