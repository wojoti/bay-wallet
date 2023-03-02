import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import {Text} from 'react-native';
import TestRenderer from 'react-test-renderer';
import ComposableButton, {ComposableButtonProps} from './ComposableButton';

const handlePress = jest.fn();
const props: ComposableButtonProps = {
  onPress: handlePress,
  testId: 'test-composablebutton-id',
  children: <Text>test composablebutton</Text>,
};

const modifiedProps: ComposableButtonProps = {
  ...props,
  disabled: true,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<ComposableButton {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render matching button with text', () => {
  render(<ComposableButton {...props} />);
  const buttonElement = screen.getByTestId('test-composablebutton-id');
  expect(buttonElement).toBeOnTheScreen();
  const buttonTextElement = within(buttonElement).getByText(
    'test composablebutton',
  );
  expect(buttonTextElement).toBeOnTheScreen();
});

test("shouldn't be able to handle onPress when disabled", () => {
  render(<ComposableButton {...modifiedProps} onPress={handlePress} />);
  const buttonElement = screen.getByTestId('test-composablebutton-id');
  fireEvent.press(buttonElement);
  expect(buttonElement).toBeDisabled();
  expect(handlePress).toHaveBeenCalledTimes(0);
});

test('should handle onPress event', () => {
  render(<ComposableButton {...props} />);
  const buttonElement = screen.getByTestId('test-composablebutton-id');
  fireEvent.press(buttonElement);
  expect(buttonElement).toBeEnabled();
  expect(handlePress).toHaveBeenCalledTimes(1);
});
