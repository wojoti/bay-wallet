import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import Input, {InputProps} from './Input';

let value = '';
const handleChange = jest.fn(inputValue => (value = inputValue));
const props: InputProps = {
  onChange: handleChange,
  testId: 'test-input-id',
  accessibilityLabel: 'Username input',
  accessibilityHint: 'Type username here',
  safe: false,
  value: value,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<Input {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render input', () => {
  render(<Input {...props} />);
  const inputElement = screen.getByTestId('test-input-id');
  expect(inputElement).toBeOnTheScreen();
});

test('should handle text change with onChange', () => {
  render(<Input {...props} />);
  const inputElement = screen.getByTestId('test-input-id');
  expect(inputElement).toBeOnTheScreen();
  fireEvent.changeText(inputElement, 'test1234');
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(value).toBe('test1234');
});
