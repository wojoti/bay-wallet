import {PropsWithChildren} from 'react';
import {Pressable, Text} from 'react-native';
import style, {textStyle} from './Button.style';

export type ButtonProps = PropsWithChildren<{
  onPress: () => void;
  type: 'primary' | 'white' | 'simple' | 'alt' | 'disabled' | 'action';
  testId?: string;
}>;

const Button = ({onPress, testId, type, children}: ButtonProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      style={({pressed}) => style({pressed, type}).wrapper}
      testID={testId}
      onPress={onPress}
      disabled={type === 'disabled'}>
      <Text style={textStyle({type}).text}>{children}</Text>
    </Pressable>
  );
};

export default Button;
