import {Button, Container, Header, Label, Link} from 'components/atoms';
import {InputArea} from 'components/molecules';
import {PropsWithChildren, useState} from 'react';
import {darkGrey, primary} from 'theme/colors';
import style from './LoginForm.style';

export type LoginFormProps = PropsWithChildren<{
  onLoginSubmit: (username: string, password: string) => void;
  onPasswordReset: () => void;
  testId?: string;
}>;

const LoginForm = ({
  onLoginSubmit,
  onPasswordReset,
  testId,
}: LoginFormProps) => {
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
      <Container direction="row" justify="space-around">
        <Container flex={1}>
          <Label color={darkGrey} size={12} testId="loginform-label">
            Did you forgot your password?
          </Label>
        </Container>
        <Container flex={1}>
          <Link
            color={primary}
            align="right"
            onPress={onPasswordReset}
            testId="loginform-link">
            Tap here for reset
          </Link>
        </Container>
      </Container>
    </Container>
  );
};

export default LoginForm;