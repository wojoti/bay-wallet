import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import {TransactionsData} from 'data/index';
import TestRenderer from 'react-test-renderer';
import TransactionsTemplate, {
  TransactionsTemplateProps,
} from './TransactionsTemplate';

let value = '';
const mockOnSearchChange = jest.fn(inputValue => (value = inputValue));
let id = 0;
const mockOnFilterPress = jest.fn(fnId => (id = fnId));
const mockOnSearchPress = jest.fn();
const props: TransactionsTemplateProps = {
  testId: 'test-transactionstemplate-id',
  onSearchChange: mockOnSearchChange,
  onSearchPress: mockOnSearchPress,
  onFilterPress: mockOnFilterPress,
  selectedId: id,
  searchValue: value,
  data: TransactionsData,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(
    <TransactionsTemplate {...props} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render transactionstemplate', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
});

test('should render SearchBar', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const SearchBarElement = within(transactionstemplateElement).getByTestId(
    'transactionstemplate-searchbar',
  );
  expect(SearchBarElement).toBeOnTheScreen();
});

test('should render SearchBar - input', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const SearchBarElement = within(transactionstemplateElement).getByTestId(
    'transactionstemplate-searchbar',
  );
  expect(SearchBarElement).toBeOnTheScreen();
  const inputElement = within(SearchBarElement).getByTestId('searchbar-input');
  expect(inputElement).toBeOnTheScreen();
});

test('should render SearchBar - input - handle onChange', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const SearchBarElement = within(transactionstemplateElement).getByTestId(
    'transactionstemplate-searchbar',
  );
  expect(SearchBarElement).toBeOnTheScreen();
  const inputElement = within(SearchBarElement).getByTestId('searchbar-input');
  expect(inputElement).toBeOnTheScreen();
  fireEvent.changeText(inputElement, 'test1234');
  expect(mockOnSearchChange).toHaveBeenCalledTimes(1);
  expect(value).toBe('test1234');
});

test('should render SearchBar - button', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const SearchBarElement = within(transactionstemplateElement).getByTestId(
    'transactionstemplate-searchbar',
  );
  expect(SearchBarElement).toBeOnTheScreen();
  const buttonElement =
    within(SearchBarElement).getByTestId('searchbar-button');
  expect(buttonElement).toBeOnTheScreen();
});

test('should render SearchBar - button - handle onPress', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const SearchBarElement = within(transactionstemplateElement).getByTestId(
    'transactionstemplate-searchbar',
  );
  expect(SearchBarElement).toBeOnTheScreen();
  const buttonElement =
    within(SearchBarElement).getByTestId('searchbar-button');
  expect(buttonElement).toBeOnTheScreen();
  expect(mockOnSearchPress).toHaveBeenCalledTimes(0);
  fireEvent.press(buttonElement);
  expect(mockOnSearchPress).toHaveBeenCalledTimes(1);
});
