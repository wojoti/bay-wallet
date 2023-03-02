import {PropsWithChildren} from 'react';
import {ScrollView, StyleProp, ViewStyle} from 'react-native';
import style from './ScrollContainer.style';

export type ScrollContainerProps = PropsWithChildren<{
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flex?: number;
  testId?: string;
  direction?: 'row' | 'column';
  customStyle?: StyleProp<ViewStyle>;
}>;

const ScrollContainer = ({
  justify,
  align,
  flex,
  direction,
  testId,
  customStyle,
  children,
}: ScrollContainerProps) => {
  return (
    <ScrollView
      contentContainerStyle={[
        style({justify, align, flex, direction}).wrapper,
        customStyle,
      ]}
      testID={testId}>
      {children}
    </ScrollView>
  );
};

export default ScrollContainer;
