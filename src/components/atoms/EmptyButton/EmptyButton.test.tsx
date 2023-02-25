import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import {Text} from 'react-native';
import TestRenderer from 'react-test-renderer';
import {primary} from 'theme/colors';
import EmptyButton, {EmptyButtonProps} from './EmptyButton';

const handlePress = jest.fn();
const props: EmptyButtonProps = {
  onPress: handlePress,
  testId: 'test-emptybutton-id',
  height: 65,
  borderRadius: 8,
  borderColor: primary,
  color: primary,
  children: <Text>test emptybutton</Text>,
};

const modifiedProps: EmptyButtonProps = {
  ...props,
  disabled: true,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<EmptyButton {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render matching button with text', () => {
  render(<EmptyButton {...props} />);
  const buttonElement = screen.getByTestId('test-emptybutton-id');
  expect(buttonElement).toBeOnTheScreen();
  const buttonTextElement = within(buttonElement).getByText('test emptybutton');
  expect(buttonTextElement).toBeOnTheScreen();
});

test("shouldn't be able to handle onPress when disabled", () => {
  render(<EmptyButton {...modifiedProps} onPress={handlePress} />);
  const buttonElement = screen.getByTestId('test-emptybutton-id');
  fireEvent.press(buttonElement);
  expect(buttonElement).toBeDisabled();
  expect(handlePress).toHaveBeenCalledTimes(0);
});

test('should handle onPress event', () => {
  render(<EmptyButton {...props} />);
  const buttonElement = screen.getByTestId('test-emptybutton-id');
  fireEvent.press(buttonElement);
  expect(buttonElement).toBeEnabled();
  expect(handlePress).toHaveBeenCalledTimes(1);
});
