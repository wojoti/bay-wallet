import {PropsWithChildren} from 'react';
import {Pressable, Text} from 'react-native';
import style, {textStyle} from './Link.style';

export type LinkProps = PropsWithChildren<{
  testId?: string;
  bold?: boolean;
  color?: string;
  align?: 'left' | 'auto' | 'right' | 'center' | 'justify';
  onPress: () => void;
}>;

function Link({
  children,
  onPress,
  testId,
  color,
  bold = false,
  align,
}: LinkProps) {
  return (
    <Pressable
      accessibilityRole="button"
      style={style.wrapper}
      testID={testId}
      onPress={onPress}>
      <Text style={textStyle({color, bold, align}).text}>{children}</Text>
    </Pressable>
  );
}
export default Link;
