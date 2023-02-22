import {PropsWithChildren} from 'react';
import {View} from 'react-native';
import style from './Container.style';

export type ContainerProps = PropsWithChildren<{
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
  flex?: number;
  testId?: string;
  direction?: 'row' | 'column';
  customStyle?: object;
}>;

const Container = ({
  justify,
  align,
  flex,
  direction,
  testId,
  customStyle,
  children,
}: ContainerProps) => {
  return (
    <View
      style={[style({justify, align, flex, direction}).wrapper, customStyle]}
      testID={testId}>
      {children}
    </View>
  );
};

export default Container;
