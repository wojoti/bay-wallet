import {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import style from './Button.style';

export type ButtonProps = PropsWithChildren<{
  onPress: () => void;
  height?: number;
  borderRadius?: number;
  borderColor?: string;
  color?: string;
  fontColor?: string;
  testId?: string;
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
    <Button
      testId={testId}
      height={height}
      borderRadius={borderRadius}
      borderColor={borderColor}
      color={color}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={
          style({
            pressed: false,
            height,
            borderRadius,
            borderColor,
            color,
            fontColor,
          }).text
        }
        testID="button-text">
        {children}
      </Text>
    </Button>
  );
};

export default Button;
