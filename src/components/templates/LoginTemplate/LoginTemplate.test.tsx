import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import LoginTemplate, {LoginTemplateProps} from './LoginTemplate';

const mockOnLoginSubmit = jest.fn<
  LoginTemplateProps['onLoginSubmit'],
  [email: string, password: string]
>();
const mockOnPasswordReset = jest.fn();
const mockOnSocialLoginPress = jest.fn<
  LoginTemplateProps['onSocialLoginPress'],
  [origin: string]
>();
const props: LoginTemplateProps = {
  onLoginSubmit: mockOnLoginSubmit,
  onPasswordReset: mockOnPasswordReset,
  onSocialLoginPress: mockOnSocialLoginPress,
  testId: 'test-logintemplate-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<LoginTemplate {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render logintemplate', () => {
  render(<LoginTemplate {...props} />);
  const logintemplateElement = screen.getByTestId('test-logintemplate-id');
  expect(logintemplateElement).toBeOnTheScreen();
});

test('should render logintemplate - logo', () => {
  render(<LoginTemplate {...props} />);
  const logintemplateElement = screen.getByTestId('test-logintemplate-id');
  expect(logintemplateElement).toBeOnTheScreen();
  const ImgElement = screen.getByTestId('logintemplate-img');
  expect(ImgElement).toBeOnTheScreen();
});

test('should render logintemplate - loginform', () => {
  render(<LoginTemplate {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
});

test('should render logintemplate - loginform - header', () => {
  render(<LoginTemplate {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const loginformHeaderElement =
    within(loginformElement).getByTestId('loginform-header');
  expect(loginformHeaderElement).toBeOnTheScreen();
});

test('should render logintemplate - loginform - button', () => {
  render(<LoginTemplate {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const loginformButtonElement =
    within(loginformElement).getByTestId('loginform-button');
  expect(loginformButtonElement).toBeOnTheScreen();
});

test('should render logintemplate - loginform - inputarea for username - label', () => {
  render(<LoginTemplate {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const inputareaElement = within(loginformElement).getByTestId(
    'loginform-inputarea-username',
  );
  expect(inputareaElement).toBeOnTheScreen();
  const inputareaLabelElement =
    within(inputareaElement).getByTestId('inputarea-label');
  expect(inputareaLabelElement).toBeOnTheScreen();
});

test('should render logintemplate - loginform - inputarea for username - input', () => {
  render(<LoginTemplate {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const inputareaElement = within(loginformElement).getByTestId(
    'loginform-inputarea-username',
  );
  expect(inputareaElement).toBeOnTheScreen();
  const inputareaInputElement =
    within(inputareaElement).getByTestId('inputarea-input');
  expect(inputareaInputElement).toBeOnTheScreen();
});

test('should render logintemplate - loginform - inputarea for password - label', () => {
  render(<LoginTemplate {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const inputareaElement = within(loginformElement).getByTestId(
    'loginform-inputarea-password',
  );
  expect(inputareaElement).toBeOnTheScreen();
  const inputareaLabelElement =
    within(inputareaElement).getByTestId('inputarea-label');
  expect(inputareaLabelElement).toBeOnTheScreen();
});

test('should render logintemplate - loginform - inputarea for password - input', () => {
  render(<LoginTemplate {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const inputareaElement = within(loginformElement).getByTestId(
    'loginform-inputarea-password',
  );
  expect(inputareaElement).toBeOnTheScreen();
  const inputareaInputElement =
    within(inputareaElement).getByTestId('inputarea-input');
  expect(inputareaInputElement).toBeOnTheScreen();
});

test('should render logintemplate - loginform - button - handle onPress', () => {
  render(<LoginTemplate {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const inputareaElement = within(loginformElement).getByTestId(
    'loginform-inputarea-username',
  );
  expect(inputareaElement).toBeOnTheScreen();
  const inputareaInputElement =
    within(inputareaElement).getByTestId('inputarea-input');
  expect(inputareaInputElement).toBeOnTheScreen();
  fireEvent.changeText(inputareaInputElement, 'randomlogin');

  const inputareaPasswordElement = within(loginformElement).getByTestId(
    'loginform-inputarea-password',
  );
  expect(inputareaPasswordElement).toBeOnTheScreen();
  const inputareaPasswordInputElement = within(
    inputareaPasswordElement,
  ).getByTestId('inputarea-input');
  expect(inputareaPasswordInputElement).toBeOnTheScreen();
  fireEvent.changeText(inputareaPasswordInputElement, 'random_password');

  const loginformButtonElement =
    within(loginformElement).getByTestId('loginform-button');
  expect(loginformButtonElement).toBeOnTheScreen();
  expect(mockOnLoginSubmit).toHaveBeenCalledTimes(0);
  fireEvent.press(loginformButtonElement);
  expect(mockOnLoginSubmit).toHaveBeenCalledTimes(1);
  expect(mockOnLoginSubmit).toHaveBeenCalledWith(
    'randomlogin',
    'random_password',
  );
});

test('should render logintemplate - loginform - label about forgotten password', () => {
  render(<LoginTemplate {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const loginformHeaderElement =
    within(loginformElement).getByTestId('loginform-label');
  expect(loginformHeaderElement).toBeOnTheScreen();
});

test('should render logintemplate - loginform - link to reset password', () => {
  render(<LoginTemplate {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const loginformHeaderElement =
    within(loginformElement).getByTestId('loginform-link');
  expect(loginformHeaderElement).toBeOnTheScreen();
});

test('should render logintemplate - loginform - link - should handle onPress event', () => {
  render(<LoginTemplate {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const loginformHeaderElement =
    within(loginformElement).getByTestId('loginform-link');
  expect(loginformHeaderElement).toBeOnTheScreen();
  expect(mockOnPasswordReset).toHaveBeenCalledTimes(0);
  fireEvent.press(loginformHeaderElement);
  expect(mockOnPasswordReset).toHaveBeenCalledTimes(1);
});
test('should render logintemplate - loginform - breakline', () => {
  render(<LoginTemplate {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const loginformBreaklineElement = within(loginformElement).getByTestId(
    'loginform-breakline',
  );
  expect(loginformBreaklineElement).toBeOnTheScreen();
});

test('should render logintemplate - loginform - SocialLoginButtons', () => {
  render(<LoginTemplate {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const SocialLoginButtonsElement = within(loginformElement).getByTestId(
    'loginform-socialloginbuttons',
  );
  expect(SocialLoginButtonsElement).toBeOnTheScreen();
});

test('should render logintemplate - loginform - SocialLoginButtons - render google button', () => {
  render(<LoginTemplate {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const SocialLoginButtonsElement = within(loginformElement).getByTestId(
    'loginform-socialloginbuttons',
  );
  expect(SocialLoginButtonsElement).toBeOnTheScreen();
  const buttonElement = within(SocialLoginButtonsElement).getByTestId(
    'socialloginbuttons-button-google',
  );
  expect(buttonElement).toBeOnTheScreen();
  const buttonImgElement1 = within(buttonElement).getByTestId('img-google');
  expect(buttonImgElement1).toBeOnTheScreen();
});

test('should render logintemplate - loginform - SocialLoginButtons - render facebook button', () => {
  render(<LoginTemplate {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const SocialLoginButtonsElement = within(loginformElement).getByTestId(
    'loginform-socialloginbuttons',
  );
  expect(SocialLoginButtonsElement).toBeOnTheScreen();
  const buttonElement = within(SocialLoginButtonsElement).getByTestId(
    'socialloginbuttons-button-facebook',
  );
  expect(buttonElement).toBeOnTheScreen();
  const buttonImgElement1 = within(buttonElement).getByTestId('img-facebook');
  expect(buttonImgElement1).toBeOnTheScreen();
});

const googleMockOnIconPress = jest.fn<
  LoginTemplateProps['onSocialLoginPress'],
  [origin: string]
>();
test('should handle correct onPress on google button', () => {
  render(
    <LoginTemplate {...props} onSocialLoginPress={googleMockOnIconPress} />,
  );
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const SocialLoginButtonsElement = within(loginformElement).getByTestId(
    'loginform-socialloginbuttons',
  );
  expect(SocialLoginButtonsElement).toBeOnTheScreen();
  const buttonElement = within(SocialLoginButtonsElement).getByTestId(
    'socialloginbuttons-button-google',
  );
  expect(buttonElement).toBeOnTheScreen();
  const buttonImgElement1 = within(buttonElement).getByTestId('img-google');
  expect(buttonImgElement1).toBeOnTheScreen();
  expect(googleMockOnIconPress).toBeCalledTimes(0);
  fireEvent.press(buttonElement);
  expect(googleMockOnIconPress).toBeCalledTimes(1);
  expect(googleMockOnIconPress).toBeCalledWith('google');
});

const facebookMockOnIconPress = jest.fn<
  LoginTemplateProps['onSocialLoginPress'],
  [origin: string]
>();
test('should handle correct onPress on facebook button', () => {
  render(
    <LoginTemplate {...props} onSocialLoginPress={facebookMockOnIconPress} />,
  );
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const SocialLoginButtonsElement = within(loginformElement).getByTestId(
    'loginform-socialloginbuttons',
  );
  expect(SocialLoginButtonsElement).toBeOnTheScreen();
  const buttonElement = within(SocialLoginButtonsElement).getByTestId(
    'socialloginbuttons-button-facebook',
  );
  expect(buttonElement).toBeOnTheScreen();
  const buttonImgElement1 = within(buttonElement).getByTestId('img-facebook');
  expect(buttonImgElement1).toBeOnTheScreen();
  expect(facebookMockOnIconPress).toBeCalledTimes(0);
  fireEvent.press(buttonElement);
  expect(facebookMockOnIconPress).toBeCalledTimes(1);
  expect(facebookMockOnIconPress).toBeCalledWith('facebook');
});
