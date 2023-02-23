import {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import style from './Breakline.style';

export type BreaklineProps = PropsWithChildren<{
  children: string;
  testId?: string;
}>;

const Breakline = ({testId, children}: BreaklineProps) => {
  return (
    <View testID={testId} style={style.MaxWidthDiv}>
      <View style={style.GreyLineDiv} />
      <Text style={style.StyledText} testID="breakline-text">
        {children}
      </Text>
    </View>
  );
};

export default Breakline;
