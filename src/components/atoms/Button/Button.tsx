import {PropsWithChildren} from 'react';
import {Pressable, Text} from 'react-native';
import style, {textStyle} from './Button.style';

export type ButtonProps = PropsWithChildren<{
  onPress: () => void;
  type:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'tertiary-alternative'
    | 'disabled';
  testId?: string;
}>;

const Button = ({onPress, testId, type, children}: ButtonProps) => {
  switch (type) {
    case 'primary':
      return (
        <Pressable
          accessibilityRole="button"
          style={({pressed}) => style({pressed}).primaryButton}
          testID={testId}
          onPress={onPress}>
          <Text style={textStyle.primaryText} testID="button-text">
            {children}
          </Text>
        </Pressable>
      );
    case 'secondary':
      return (
        <Pressable
          accessibilityRole="button"
          style={({pressed}) => style({pressed}).secondaryButton}
          testID={testId}
          onPress={onPress}>
          <Text style={textStyle.secondaryText} testID="button-text">
            {children}
          </Text>
        </Pressable>
      );
    case 'tertiary':
      return (
        <Pressable
          accessibilityRole="button"
          style={({pressed}) => style({pressed}).tertiaryButton}
          testID={testId}
          onPress={onPress}>
          <Text style={textStyle.tertiaryText} testID="button-text">
            {children}
          </Text>
        </Pressable>
      );
    case 'tertiary-alternative':
      return (
        <Pressable
          accessibilityRole="button"
          style={({pressed}) => style({pressed}).tertiaryButton}
          testID={testId}
          onPress={onPress}>
          <Text style={textStyle.tertiaryAlternativeText} testID="button-text">
            {children}
          </Text>
        </Pressable>
      );
    case 'disabled':
      return (
        <Pressable
          accessibilityRole="button"
          style={({pressed}) => style({pressed}).primaryButton}
          testID={testId}
          onPress={onPress}
          disabled={true}>
          <Text style={textStyle.primaryText} testID="button-text">
            {children}
          </Text>
        </Pressable>
      );
  }
};

export default Button;
