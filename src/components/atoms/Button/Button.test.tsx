import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import Button, {ButtonProps} from './Button';

const handleClick = jest.fn();
const props: ButtonProps = {
  onPress: handleClick,
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
  render(<Button {...modifiedProps} onPress={handleClick} />);
  const buttonElement = screen.getByTestId('test-button-id');
  fireEvent.press(buttonElement);
  expect(buttonElement).toBeDisabled();
  expect(handleClick).toHaveBeenCalledTimes(0);
});

test('should handle onPress event', () => {
  render(<Button {...props} />);
  const buttonElement = screen.getByTestId('test-button-id');
  fireEvent.press(buttonElement);
  expect(buttonElement).toBeEnabled();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
