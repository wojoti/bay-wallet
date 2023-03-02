import {PropsWithChildren} from 'react';
import {Pressable, StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
import style, {fontStyle} from './Button.style';

export type ButtonProps = PropsWithChildren<{
  onPress: () => void;
  customStyle?: StyleProp<ViewStyle>;
  customFontStyle?: StyleProp<TextStyle>;
  testId: string;
  disabled?: boolean;
}>;

const Button = ({
  onPress,
  customStyle,
  customFontStyle,
  disabled = false,
  testId,
  children,
}: ButtonProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      testID={testId}
      style={({pressed}) => [
        style.wrapper,
        pressed && style.pressed,
        customStyle,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[fontStyle.wrapper, customFontStyle]} testID="button-text">
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;
