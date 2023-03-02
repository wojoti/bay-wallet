import {PropsWithChildren} from 'react';
import {Pressable, StyleProp, ViewStyle} from 'react-native';
import style from './ComposableButton.style';

export type ComposableButtonProps = PropsWithChildren<{
  onPress: () => void;
  customStyle?: StyleProp<ViewStyle>;
  testId: string;
  disabled?: boolean;
}>;

const ComposableButton = ({
  onPress,
  customStyle,
  disabled = false,
  testId,
  children,
}: ComposableButtonProps) => {
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
      {children}
    </Pressable>
  );
};

export default ComposableButton;
