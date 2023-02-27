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
  fontSize?: number;
  fontWeight?: 'normal' | 'bold';
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
  fontSize,
  fontWeight,
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
            fontSize,
            fontWeight,
          }).font
        }
        testID="button-text">
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;
