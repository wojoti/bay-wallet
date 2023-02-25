import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import SocialLoginButtons, {
  SocialLoginButtonsProps,
} from './SocialLoginButtons';

const mockOnIconPress = jest.fn<
  SocialLoginButtonsProps['onIconPress'],
  [origin: string]
>();
const props: SocialLoginButtonsProps = {
  testId: 'test-socialloginbuttons-id',
  onIconPress: mockOnIconPress,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<SocialLoginButtons {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render SocialLoginButtons', () => {
  render(<SocialLoginButtons {...props} />);
  const SocialLoginButtonsElement = screen.getByTestId(
    'test-socialloginbuttons-id',
  );
  expect(SocialLoginButtonsElement).toBeOnTheScreen();
});

test('should render SocialLoginButtons - render google button', () => {
  render(<SocialLoginButtons {...props} />);
  const SocialLoginButtonsElement = screen.getByTestId(
    'test-socialloginbuttons-id',
  );
  expect(SocialLoginButtonsElement).toBeOnTheScreen();
  const buttonElement = within(SocialLoginButtonsElement).getByTestId(
    'socialloginbuttons-button-google',
  );
  expect(buttonElement).toBeOnTheScreen();
  const buttonImgElement1 = within(buttonElement).getByTestId('img-google');
  expect(buttonImgElement1).toBeOnTheScreen();
});

test('should render SocialLoginButtons - render facebook button', () => {
  render(<SocialLoginButtons {...props} />);
  const SocialLoginButtonsElement = screen.getByTestId(
    'test-socialloginbuttons-id',
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
  SocialLoginButtonsProps['onIconPress'],
  [origin: string]
>();
test('should handle correct onPress on google button', () => {
  render(<SocialLoginButtons {...props} onIconPress={googleMockOnIconPress} />);
  const SocialLoginButtonsElement = screen.getByTestId(
    'test-socialloginbuttons-id',
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
  SocialLoginButtonsProps['onIconPress'],
  [origin: string]
>();
test('should handle correct onPress on facebook button', () => {
  render(
    <SocialLoginButtons {...props} onIconPress={facebookMockOnIconPress} />,
  );
  const SocialLoginButtonsElement = screen.getByTestId(
    'test-socialloginbuttons-id',
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
