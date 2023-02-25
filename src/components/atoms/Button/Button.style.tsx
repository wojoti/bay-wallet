import {StyleSheet} from 'react-native';
import {primary} from 'theme/colors';
import {boldFont} from 'theme/fonts';

interface PressableProps {
  pressed?: boolean;
  height?: number;
  borderRadius?: number;
  borderColor?: string;
  color?: string;
}

interface TextProps {
  fontColor?: string;
}

export const textStyle = ({fontColor}: TextProps) =>
  StyleSheet.create({
    font: {
      textAlign: 'center',
      fontFamily: boldFont,
      fontSize: 18,
      color: fontColor || 'white',
    },
  });
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
      borderColor: borderColor || primary,
      borderStyle: 'solid',
      opacity: pressed ? 0.8 : 1,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color || primary,
    },
  });
export default style;
