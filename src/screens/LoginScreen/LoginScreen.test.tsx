import '@testing-library/jest-native/extend-expect';
import {screen, within} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import TestRenderer from 'react-test-renderer';
import renderWithProviders from 'root/test-utils';
import {store} from 'store/store';
import LoginScreen, {LoginScreenProps} from './LoginScreen';

const props: LoginScreenProps = {
  testId: 'test-loginscreen-id',
};

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockNavigate}),
  useIsFocused: jest.fn(),
}));

test('should match snapshot', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <LoginScreen {...props} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render loginscreen', () => {
  renderWithProviders(<LoginScreen {...props} />);
  const loginscreenElement = screen.getByTestId('test-loginscreen-id');
  expect(loginscreenElement).toBeOnTheScreen();
});

/////////////////////

test('should render loginscreen - logintemplate - logo', () => {
  renderWithProviders(<LoginScreen {...props} />);
  const loginscreenElement = screen.getByTestId('test-loginscreen-id');
  expect(loginscreenElement).toBeOnTheScreen();
  const ImgElement = screen.getByTestId('logintemplate-img');
  expect(ImgElement).toBeOnTheScreen();
});

test('should render loginscreen - logintemplate - loginform', () => {
  renderWithProviders(<LoginScreen {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
});

test('should render loginscreen - logintemplate - loginform - header', () => {
  renderWithProviders(<LoginScreen {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const loginformHeaderElement =
    within(loginformElement).getByTestId('loginform-header');
  expect(loginformHeaderElement).toBeOnTheScreen();
});

test('should render loginscreen - logintemplate - loginform - button', () => {
  renderWithProviders(<LoginScreen {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const loginformButtonElement =
    within(loginformElement).getByTestId('loginform-button');
  expect(loginformButtonElement).toBeOnTheScreen();
});

test('should render loginscreen - logintemplate - loginform - inputarea for username - label', () => {
  renderWithProviders(<LoginScreen {...props} />);
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

test('should render loginscreen - logintemplate - loginform - inputarea for username - input', () => {
  renderWithProviders(<LoginScreen {...props} />);
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

test('should render loginscreen - logintemplate - loginform - inputarea for password - label', () => {
  renderWithProviders(<LoginScreen {...props} />);
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

test('should render loginscreen - logintemplate - loginform - inputarea for password - input', () => {
  renderWithProviders(<LoginScreen {...props} />);
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

test('should render loginscreen - logintemplate - loginform - label about forgotten password', () => {
  renderWithProviders(<LoginScreen {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const loginformHeaderElement =
    within(loginformElement).getByTestId('loginform-label');
  expect(loginformHeaderElement).toBeOnTheScreen();
});

test('should render loginscreen - logintemplate - loginform - link to reset password', () => {
  renderWithProviders(<LoginScreen {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const loginformHeaderElement =
    within(loginformElement).getByTestId('loginform-link');
  expect(loginformHeaderElement).toBeOnTheScreen();
});

test('should render loginscreen - logintemplate - loginform - breakline', () => {
  renderWithProviders(<LoginScreen {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const loginformBreaklineElement = within(loginformElement).getByTestId(
    'loginform-breakline',
  );
  expect(loginformBreaklineElement).toBeOnTheScreen();
});

test('should render loginscreen - logintemplate - loginform - SocialLoginButtons', () => {
  renderWithProviders(<LoginScreen {...props} />);
  const loginformElement = screen.getByTestId('logintemplate-loginform');
  expect(loginformElement).toBeOnTheScreen();
  const SocialLoginButtonsElement = within(loginformElement).getByTestId(
    'loginform-socialloginbuttons',
  );
  expect(SocialLoginButtonsElement).toBeOnTheScreen();
});

test('should render loginscreen - logintemplate - loginform - SocialLoginButtons - render google button', () => {
  renderWithProviders(<LoginScreen {...props} />);
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

test('should render loginscreen - logintemplate - loginform - SocialLoginButtons - render facebook button', () => {
  renderWithProviders(<LoginScreen {...props} />);
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
