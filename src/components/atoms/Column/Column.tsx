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
  background?: string;
  flex?: number;
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
  background,
  flex,
  testId,
  children,
}: ColumnProps) => {
  return (
    <View
      style={
        style({
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
        }).wrapper
      }
      testID={testId}>
      {children}
    </View>
  );
};

export default Column;
