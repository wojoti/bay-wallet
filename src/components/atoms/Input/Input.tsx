import {PropsWithChildren} from 'react';
import {StyleProp, TextInput, TextStyle} from 'react-native';
import style from './Input.style';

export type InputProps = PropsWithChildren<{
  accessibilityLabel: string;
  accessibilityHint: string;
  onChange: (value: string) => void;
  value: string;
  testId: string;
  safe?: boolean;
  placeholder?: string;
  customStyle?: StyleProp<TextStyle>;
}>;

const Input = ({
  accessibilityLabel,
  accessibilityHint,
  onChange,
  value,
  testId,
  safe = false,
  placeholder,
  customStyle,
}: InputProps) => {
  return (
    <TextInput
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      style={[style.wrapper, customStyle]}
      testID={testId}
      onChangeText={onChange}
      autoComplete={'off'}
      autoCorrect={false}
      placeholder={placeholder}
      value={value}
      secureTextEntry={safe}
    />
  );
};

export default Input;
