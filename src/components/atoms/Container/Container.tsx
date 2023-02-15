import {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './Container.style';

export type ContainerProps = PropsWithChildren<{
  background: 'primary' | 'secondary';
  testId?: string;
}>;

const Container = ({background, testId, children}: ContainerProps) => {
  return (
    <SafeAreaView style={style({background}).wrapper} testID={testId}>
      {children}
    </SafeAreaView>
  );
};

export default Container;
