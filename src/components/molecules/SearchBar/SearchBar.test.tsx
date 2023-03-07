import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
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
