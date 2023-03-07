import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import SearchBar, {SearchBarProps} from './SearchBar';

let value = '';
const handleChange = jest.fn(inputValue => (value = inputValue));
const mockOnPress = jest.fn();
const props: SearchBarProps = {
  testId: 'test-searchbar-id',
  value: value,
  onChange: handleChange,
  onPress: mockOnPress,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<SearchBar {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render SearchBar', () => {
  render(<SearchBar {...props} />);
  const SearchBarElement = screen.getByTestId('test-searchbar-id');
  expect(SearchBarElement).toBeOnTheScreen();
});

test('should render SearchBar - input', () => {
  render(<SearchBar {...props} />);
  const SearchBarElement = screen.getByTestId('test-searchbar-id');
  expect(SearchBarElement).toBeOnTheScreen();
  const inputElement = within(SearchBarElement).getByTestId('searchbar-input');
  expect(inputElement).toBeOnTheScreen();
});

test('should render SearchBar - input - handle onChange', () => {
  render(<SearchBar {...props} />);
  const SearchBarElement = screen.getByTestId('test-searchbar-id');
  expect(SearchBarElement).toBeOnTheScreen();
  const inputElement = within(SearchBarElement).getByTestId('searchbar-input');
  expect(inputElement).toBeOnTheScreen();
  fireEvent.changeText(inputElement, 'test1234');
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(value).toBe('test1234');
});

test('should render SearchBar - button', () => {
  render(<SearchBar {...props} />);
  const SearchBarElement = screen.getByTestId('test-searchbar-id');
  expect(SearchBarElement).toBeOnTheScreen();
  const buttonElement =
    within(SearchBarElement).getByTestId('searchbar-button');
  expect(buttonElement).toBeOnTheScreen();
});

test('should render SearchBar - button - handle onPress', () => {
  render(<SearchBar {...props} />);
  const SearchBarElement = screen.getByTestId('test-searchbar-id');
  expect(SearchBarElement).toBeOnTheScreen();
  const buttonElement =
    within(SearchBarElement).getByTestId('searchbar-button');
  expect(buttonElement).toBeOnTheScreen();
  expect(mockOnPress).toHaveBeenCalledTimes(0);
  fireEvent.press(buttonElement);
  expect(mockOnPress).toHaveBeenCalledTimes(1);
});
