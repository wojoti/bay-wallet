import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import LoginForm, {LoginFormProps} from './LoginForm';

const mockOnLoginSubmit = jest.fn<
  LoginFormProps['onLoginSubmit'],
  [email: string, password: string]
>();

const props: LoginFormProps = {
  onLoginSubmit: mockOnLoginSubmit,
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
  fireEvent.press(loginformButtonElement);
  expect(mockOnLoginSubmit).toHaveBeenCalledWith(
    'randomlogin',
    'random_password',
  );
});
