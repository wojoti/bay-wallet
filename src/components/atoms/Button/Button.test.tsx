import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import Button, {ButtonProps} from './Button';

const handlePress = jest.fn();
const props: ButtonProps = {
  onPress: handlePress,
  testId: 'test-button-id',
  children: 'test button',
  type: 'primary',
};

const modifiedProps: ButtonProps = {
  ...props,
  type: 'disabled',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<Button {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render matching button with text', () => {
  render(<Button {...props} />);
  const buttonElement = screen.getByTestId('test-button-id');
  expect(buttonElement).toBeOnTheScreen();
  const textElement = screen.getByText('test button');
  expect(textElement).toBeOnTheScreen();
});

test("shouldn't be able to handle onPress when disabled", () => {
  render(<Button {...modifiedProps} onPress={handlePress} />);
  const buttonElement = screen.getByTestId('test-button-id');
  fireEvent.press(buttonElement);
  expect(buttonElement).toBeDisabled();
  expect(handlePress).toHaveBeenCalledTimes(0);
});

test('should handle onPress event', () => {
  render(<Button {...props} />);
  const buttonElement = screen.getByTestId('test-button-id');
  fireEvent.press(buttonElement);
  expect(buttonElement).toBeEnabled();
  expect(handlePress).toHaveBeenCalledTimes(1);
});
