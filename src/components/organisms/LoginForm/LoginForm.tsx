import {Button, Container, Header, Label, Link} from 'components/atoms';
import {Breakline, InputArea, SocialLoginButtons} from 'components/molecules';
import {PropsWithChildren, useState} from 'react';
import buttonStyle, {buttonTextStyle} from 'theme/button';
import {darkGrey, primary} from 'theme/colors';
import style from './LoginForm.style';

export type LoginFormProps = PropsWithChildren<{
  onLoginSubmit: (username: string, password: string) => void;
  onPasswordReset: () => void;
  onSocialLoginPress: (origin: string) => void;
  testId?: string;
}>;

const LoginForm = ({
  onLoginSubmit,
  onPasswordReset,
  onSocialLoginPress,
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
        onChange={onEmailChange}
        testId="loginform-inputarea-username"
        value={email}
        label="Username"
        accessibilityLabel="Username input"
        accessibilityHint="Type username here"
      />
      <InputArea
        onChange={onPasswordChange}
        testId="loginform-inputarea-password"
        value={password}
        label="Password"
        accessibilityLabel="Password input"
        accessibilityHint="Type password here"
        safe={true}
      />
      <Container customStyle={style.buttonMargin}>
        <Button
          customStyle={buttonStyle.primary}
          customFontStyle={buttonTextStyle.primary}
          onPress={onSubmit}
          testId="loginform-button">
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
      <Container customStyle={style.breaklineSpacing}>
        <Breakline testId="loginform-breakline">or sign in with</Breakline>
      </Container>
      <Container>
        <SocialLoginButtons
          onIconPress={onSocialLoginPress}
          testId="loginform-socialloginbuttons"
        />
      </Container>
    </Container>
  );
};

export default LoginForm;
