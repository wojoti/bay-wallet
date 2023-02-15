import {PropsWithChildren} from 'react';
import {View} from 'react-native';
import style from './Column.style';

export type ColumnProps = PropsWithChildren<{
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
  testId?: string;
}>;

const Column = ({
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
  testId,
  children,
}: ColumnProps) => {
  return (
    <View
      style={style({mt, mb, ml, mr, pt, pb, pl, pr, justify, align}).wrapper}
      testID={testId}>
      {children}
    </View>
  );
};

export default Column;
