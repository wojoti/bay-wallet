import {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import style from './Label.style';

export type LabelProps = PropsWithChildren<{
  color?: string;
  testId?: string;
  align?: 'left' | 'auto' | 'right' | 'center' | 'justify';
  size?: number;
}>;

const Label = ({color, align, size, testId, children}: LabelProps) => {
  return (
    <Text style={style({color, size, align}).wrapper} testID={testId}>
      {children}
    </Text>
  );
};

export default Label;
