import {PropsWithChildren, ReactNode} from 'react';
import {Pressable} from 'react-native';
import style from './EmptyButton.style';

export type EmptyButtonProps = PropsWithChildren<{
  onPress: () => void;
  height?: number;
  borderRadius?: number;
  borderColor?: string;
  color?: string;
  fontColor?: string;
  testId?: string;
  disabled?: boolean;
  children: ReactNode;
}>;

const EmptyButton = ({
  onPress,
  height,
  borderRadius,
  borderColor,
  color,
  fontColor,
  disabled = false,
  testId,
  children,
}: EmptyButtonProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      style={({pressed}) =>
        style({pressed, height, borderRadius, borderColor, color, fontColor})
          .pressable
      }
      testID={testId}
      onPress={onPress}
      disabled={disabled}>
      {children}
    </Pressable>
  );
};

export default EmptyButton;
