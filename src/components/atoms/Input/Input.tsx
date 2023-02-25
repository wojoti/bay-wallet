import {PropsWithChildren} from 'react';
import {TextInput} from 'react-native';
import style from './Input.style';

export type InputProps = PropsWithChildren<{
  type: 'username' | 'password' | 'phone' | 'password-confirm';
  onChange: (value: string) => void;
  testId?: string;
}>;

const Input = ({type, onChange, testId}: InputProps) => {
  switch (type) {
    case 'username':
      return (
        <TextInput
          accessibilityLabel="Login input field"
          accessibilityHint="Allow to insert username"
          style={style.wrapper}
          testID={testId}
          onChangeText={onChange}
          autoComplete={'username'}
          autoCorrect={false}
        />
      );
    case 'password':
      return (
        <TextInput
          accessibilityLabel={'Password input field'}
          accessibilityHint={'Allow to insert password'}
          style={style.wrapper}
          secureTextEntry={true}
          testID={testId}
          onChangeText={onChange}
          autoComplete={'password'}
          autoCorrect={false}
        />
      );
    case 'phone':
      return (
        <TextInput
          accessibilityLabel={'Phone number input field'}
          accessibilityHint={'Allow to insert phone number'}
          style={style.wrapper}
          secureTextEntry={true}
          testID={testId}
          onChangeText={onChange}
          autoComplete={'tel'}
          autoCorrect={false}
        />
      );
    case 'password-confirm':
      return (
        <TextInput
          accessibilityLabel={'Confirm password input field'}
          accessibilityHint={'Allow to insert password confirmation'}
          style={style.wrapper}
          secureTextEntry={true}
          testID={testId}
          onChangeText={onChange}
          autoComplete={'off'}
          autoCorrect={false}
        />
      );
  }
};

export default Input;
