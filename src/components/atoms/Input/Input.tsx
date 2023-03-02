import {PropsWithChildren} from 'react';
import {TextInput} from 'react-native';
import style from './Input.style';

export type InputProps = PropsWithChildren<{
  accessibilityLabel: string;
  accessibilityHint: string;
  onChange: (value: string) => void;
  value: string;
  testId: string;
  safe?: boolean;
}>;

const Input = ({
  accessibilityLabel,
  accessibilityHint,
  onChange,
  value,
  testId,
  safe = false,
}: InputProps) => {
  return (
    <TextInput
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      style={style.wrapper}
      testID={testId}
      onChangeText={onChange}
      autoComplete={'off'}
      autoCorrect={false}
      value={value}
      secureTextEntry={safe}
    />
  );
};

export default Input;
