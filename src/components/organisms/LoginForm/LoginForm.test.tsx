import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import LoginForm, {LoginFormProps} from './LoginForm';

const mockOnLoginSubmit = jest.fn<
  LoginFormProps['onLoginSubmit'],
  [email: string, password: string]
>();
const mockOnPasswordReset = jest.fn();
const mockOnSocialLoginPress = jest.fn();
const props: LoginFormProps = {
  onLoginSubmit: mockOnLoginSubmit,
  onPasswordReset: mockOnPasswordReset,
  onSocialLoginPress: mockOnSocialLoginPress,
  testId: 'test-loginform-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<LoginForm {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render loginform', () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
  expect(loginformElement).toBeOnTheScreen();
});

test('should render loginform - header', () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
  expect(loginformElement).toBeOnTheScreen();
  const loginformHeaderElement =
    within(loginformElement).getByTestId('loginform-header');
  expect(loginformHeaderElement).toBeOnTheScreen();
});

test('should render loginform - button', () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
  expect(loginformElement).toBeOnTheScreen();
  const loginformButtonElement =
    within(loginformElement).getByTestId('loginform-button');
  expect(loginformButtonElement).toBeOnTheScreen();
});

test('should render loginform - inputarea for username - label', () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
  expect(loginformElement).toBeOnTheScreen();
  const inputareaElement = within(loginformElement).getByTestId(
    'loginform-inputarea-username',
  );
  expect(inputareaElement).toBeOnTheScreen();
  const inputareaLabelElement =
    within(inputareaElement).getByTestId('inputarea-label');
  expect(inputareaLabelElement).toBeOnTheScreen();
});

test('should render loginform - inputarea for username - input', () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
  expect(loginformElement).toBeOnTheScreen();
  const inputareaElement = within(loginformElement).getByTestId(
    'loginform-inputarea-username',
  );
  expect(inputareaElement).toBeOnTheScreen();
  const inputareaInputElement =
    within(inputareaElement).getByTestId('inputarea-input');
  expect(inputareaInputElement).toBeOnTheScreen();
});

test('should render loginform - inputarea for password - label', () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
  expect(loginformElement).toBeOnTheScreen();
  const inputareaElement = within(loginformElement).getByTestId(
    'loginform-inputarea-password',
  );
  expect(inputareaElement).toBeOnTheScreen();
  const inputareaLabelElement =
    within(inputareaElement).getByTestId('inputarea-label');
  expect(inputareaLabelElement).toBeOnTheScreen();
});

test('should render loginform - inputarea for password - input', () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
  expect(loginformElement).toBeOnTheScreen();
  const inputareaElement = within(loginformElement).getByTestId(
    'loginform-inputarea-password',
  );
  expect(inputareaElement).toBeOnTheScreen();
  const inputareaInputElement =
    within(inputareaElement).getByTestId('inputarea-input');
  expect(inputareaInputElement).toBeOnTheScreen();
});

test('should render loginform - button - handle onPress', () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
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

test('should render loginform - label about forgotten password', () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
  expect(loginformElement).toBeOnTheScreen();
  const loginformHeaderElement =
    within(loginformElement).getByTestId('loginform-label');
  expect(loginformHeaderElement).toBeOnTheScreen();
});

test('should render loginform - link to reset password', () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
  expect(loginformElement).toBeOnTheScreen();
  const loginformHeaderElement =
    within(loginformElement).getByTestId('loginform-link');
  expect(loginformHeaderElement).toBeOnTheScreen();
});

test('should render loginform - link - should handle onPress event', () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
  expect(loginformElement).toBeOnTheScreen();
  const loginformHeaderElement =
    within(loginformElement).getByTestId('loginform-link');
  expect(loginformHeaderElement).toBeOnTheScreen();
  expect(mockOnPasswordReset).toHaveBeenCalledTimes(0);
  fireEvent.press(loginformHeaderElement);
  expect(mockOnPasswordReset).toHaveBeenCalledTimes(1);
});
test('should render loginform - breakline', () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
  expect(loginformElement).toBeOnTheScreen();
  const loginformBreaklineElement = within(loginformElement).getByTestId(
    'loginform-breakline',
  );
  expect(loginformBreaklineElement).toBeOnTheScreen();
});

test('should render loginform - SocialLoginButtons', () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
  expect(loginformElement).toBeOnTheScreen();
  const SocialLoginButtonsElement = within(loginformElement).getByTestId(
    'loginform-socialloginbuttons',
  );
  expect(SocialLoginButtonsElement).toBeOnTheScreen();
});

test('should render loginform - SocialLoginButtons - render google button', () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
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

test('should render loginform - SocialLoginButtons - render facebook button', () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
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
  LoginFormProps['onSocialLoginPress'],
  [origin: string]
>();
test('should handle correct onPress on google button', () => {
  render(<LoginForm {...props} onSocialLoginPress={googleMockOnIconPress} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
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
  LoginFormProps['onSocialLoginPress'],
  [origin: string]
>();
test('should handle correct onPress on facebook button', () => {
  render(<LoginForm {...props} onSocialLoginPress={facebookMockOnIconPress} />);
  const loginformElement = screen.getByTestId('test-loginform-id');
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
