import {StyleSheet} from 'react-native';
import {primary} from 'theme/colors';
import {boldFont} from 'theme/fonts';

interface PressableProps {
  pressed?: boolean;
  height?: number;
  borderRadius?: number;
  borderColor?: string;
  color?: string;
  fontColor?: string;
}

const style = ({
  pressed,
  height,
  borderRadius,
  borderColor,
  color,
  fontColor,
}: PressableProps) =>
  StyleSheet.create({
    pressable: {
      height: height || 65,
      borderRadius: borderRadius || 8,
      borderColor: borderColor || primary,
      borderStyle: 'solid',
      opacity: pressed ? 0.8 : 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color || primary,
    },
    text: {
      textAlign: 'center',
      fontFamily: boldFont,
      fontSize: 18,
      color: fontColor || 'white',
    },
  });
export default style;
