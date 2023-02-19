import {PropsWithChildren} from 'react';
import {View} from 'react-native';
import style from './Container.style';

export type ContainerProps = PropsWithChildren<{
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
  width?: string;
  height?: string;
  radius?: number;
  direction?: 'row' | 'column';
}>;

const Container = ({
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
  width,
  height,
  radius,
  direction,
  testId,
  children,
}: ContainerProps) => {
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
          width,
          height,
          radius,
          direction,
        }).wrapper
      }
      testID={testId}>
      {children}
    </View>
  );
};

export default Container;
