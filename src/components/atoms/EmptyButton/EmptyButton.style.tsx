import {StyleSheet} from 'react-native';
import {primary} from 'theme/colors';

interface PressableProps {
  pressed?: boolean;
  height?: number;
  borderRadius?: number;
  borderColor?: string;
  color?: string;
}

const style = ({
  pressed,
  height,
  borderRadius,
  borderColor,
  color,
}: PressableProps) =>
  StyleSheet.create({
    pressable: {
      height: height || 65,
      borderRadius: borderRadius || 8,
      borderWidth: 1,
      borderColor: borderColor || primary,
      borderStyle: 'solid',
      opacity: pressed ? 0.8 : 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color || primary,
    },
  });
export default style;
