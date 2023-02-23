import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import InputArea, {InputAreaProps} from './InputArea';

let value = '';
const handleChange = jest.fn(inputareaValue => (value = inputareaValue));
const props: InputAreaProps = {
  onChange: handleChange,
  testId: 'test-inputarea-id',
  type: 'username',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<InputArea {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render inputarea', () => {
  render(<InputArea {...props} />);
  const inputareaElement = screen.getByTestId('test-inputarea-id');
  expect(inputareaElement).toBeOnTheScreen();
});

test('should render inputarea - label', () => {
  render(<InputArea {...props} />);
  const inputareaElement = screen.getByTestId('test-inputarea-id');
  expect(inputareaElement).toBeOnTheScreen();
  const inputareaLabelElement =
    within(inputareaElement).getByTestId('inputarea-label');
  expect(inputareaLabelElement).toBeOnTheScreen();
});

test('should render inputarea - input', () => {
  render(<InputArea {...props} />);
  const inputareaElement = screen.getByTestId('test-inputarea-id');
  expect(inputareaElement).toBeOnTheScreen();
  const inputareaInputElement =
    within(inputareaElement).getByTestId('inputarea-input');
  expect(inputareaInputElement).toBeOnTheScreen();
});

test('should render inputarea - input - should handle onChange', () => {
  render(<InputArea {...props} />);
  const inputareaElement = screen.getByTestId('test-inputarea-id');
  expect(inputareaElement).toBeOnTheScreen();
  const inputareaInputElement =
    within(inputareaElement).getByTestId('inputarea-input');
  expect(inputareaInputElement).toBeOnTheScreen();
  fireEvent.changeText(inputareaInputElement, 'test1234');
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(value).toBe('test1234');
});
