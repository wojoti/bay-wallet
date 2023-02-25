import {PropsWithChildren} from 'react';
import {Pressable, Text} from 'react-native';
import style, {textStyle} from './Button.style';

export type ButtonProps = PropsWithChildren<{
  onPress: () => void;
  height?: number;
  borderRadius?: number;
  borderColor?: string;
  color?: string;
  fontColor?: string;
  testId: string;
  disabled?: boolean;
}>;

const Button = ({
  onPress,
  height,
  borderRadius,
  borderColor,
  color,
  fontColor,
  disabled = false,
  testId,
  children,
}: ButtonProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      testID={testId}
      style={({pressed}) =>
        style({pressed, height, borderRadius, borderColor, color}).pressable
      }
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={
          textStyle({
            fontColor,
          }).font
        }
        testID="button-text">
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;
