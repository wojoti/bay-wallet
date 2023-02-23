import {Button, Container, Header} from 'components/atoms';
import {InputArea} from 'components/molecules';
import {PropsWithChildren, useState} from 'react';
import style from './LoginForm.style';

export type LoginFormProps = PropsWithChildren<{
  onLoginSubmit: (username: string, password: string) => void;
  testId?: string;
}>;

const LoginForm = ({onLoginSubmit, testId}: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    onLoginSubmit(email, password);
  };
  const onEmailChange = (value: string) => {
    setEmail(value);
  };
  const onPasswordChange = (value: string) => {
    setPassword(value);
  };
  return (
    <Container testId={testId}>
      <Header testId="loginform-header">Login</Header>
      <InputArea
        type="username"
        onChange={onEmailChange}
        testId="loginform-inputarea-username"
      />
      <InputArea
        type="password"
        onChange={onPasswordChange}
        testId="loginform-inputarea-password"
      />
      <Container customStyle={style.buttonMargin}>
        <Button onPress={onSubmit} type={'primary'} testId="loginform-button">
          SIGN IN
        </Button>
      </Container>
    </Container>
  );
};

export default LoginForm;
