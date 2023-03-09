import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import {TransactionsData} from 'data/index';
import TestRenderer from 'react-test-renderer';
import {iconGrey, primary, red} from 'theme/colors';
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

const modifiedProps: TransactionsTemplateProps = {
  ...props,
  selectedId: 2,
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

test('should render transactionstemplate - searchbar', () => {
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

test('should render transactionstemplate - searchbar - input', () => {
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

test('should render transactionstemplate - searchbar - input - handle onChange', () => {
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

test('should render transactionstemplate - searchbar - button', () => {
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

test('should render transactionstemplate - searchbar - button - handle onPress', () => {
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

test('should render transactionstemplate - TransactionsFilter', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const TransactionsFilterElement = screen.getByTestId(
    'transactionstemplate-transactionsfilter',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
});

test('should render transactionstemplate - TransactionsFilter - All button', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const TransactionsFilterElement = screen.getByTestId(
    'transactionstemplate-transactionsfilter',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const buttonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-all',
  );
  expect(buttonElement).toBeOnTheScreen();
});

test('should render transactionstemplate - TransactionsFilter - All button - onPress', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const TransactionsFilterElement = screen.getByTestId(
    'transactionstemplate-transactionsfilter',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const buttonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-all',
  );
  expect(buttonElement).toBeOnTheScreen();
  fireEvent.press(buttonElement);
  expect(mockOnFilterPress).toBeCalledWith(0);
});

test('should render transactionstemplate - TransactionsFilter - Expense button', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const TransactionsFilterElement = screen.getByTestId(
    'transactionstemplate-transactionsfilter',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const buttonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-expense',
  );
  expect(buttonElement).toBeOnTheScreen();
});

test('should render transactionstemplate - TransactionsFilter - Expense button - onPress', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const TransactionsFilterElement = screen.getByTestId(
    'transactionstemplate-transactionsfilter',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const buttonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-expense',
  );
  expect(buttonElement).toBeOnTheScreen();
  fireEvent.press(buttonElement);
  expect(mockOnFilterPress).toBeCalledWith(1);
});

test('should render transactionstemplate - TransactionsFilter - Income button', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const TransactionsFilterElement = screen.getByTestId(
    'transactionstemplate-transactionsfilter',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const buttonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-income',
  );
  expect(buttonElement).toBeOnTheScreen();
});

test('should render transactionstemplate - TransactionsFilter - Income button - onPress', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const TransactionsFilterElement = screen.getByTestId(
    'transactionstemplate-transactionsfilter',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const buttonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-income',
  );
  expect(buttonElement).toBeOnTheScreen();
  fireEvent.press(buttonElement);
  expect(mockOnFilterPress).toBeCalledWith(2);
});

test('should render transactionstemplate - TransactionsFilter - selected id', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const TransactionsFilterElement = screen.getByTestId(
    'transactionstemplate-transactionsfilter',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const allButtonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-all',
  );
  expect(allButtonElement).toBeOnTheScreen();
  const allTextElement = within(allButtonElement).getByTestId('button-text');
  expect(allTextElement).toBeOnTheScreen();
  expect(allTextElement).toHaveStyle({color: primary});

  const expenseButtonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-expense',
  );
  expect(expenseButtonElement).toBeOnTheScreen();
  const expenseTextElement =
    within(expenseButtonElement).getByTestId('button-text');
  expect(expenseTextElement).toBeOnTheScreen();
  expect(expenseTextElement).toHaveStyle({color: iconGrey});

  const incomeButtonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-income',
  );
  expect(incomeButtonElement).toBeOnTheScreen();
  const incomeTextElement =
    within(incomeButtonElement).getByTestId('button-text');
  expect(incomeTextElement).toBeOnTheScreen();
  expect(incomeTextElement).toHaveStyle({color: iconGrey});
});

test('should render transactionstemplate - TransactionsFilter - different selected id', () => {
  render(<TransactionsTemplate {...modifiedProps} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const TransactionsFilterElement = screen.getByTestId(
    'transactionstemplate-transactionsfilter',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const allButtonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-all',
  );
  expect(allButtonElement).toBeOnTheScreen();
  const allTextElement = within(allButtonElement).getByTestId('button-text');
  expect(allTextElement).toBeOnTheScreen();
  expect(allTextElement).toHaveStyle({color: iconGrey});

  const expenseButtonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-expense',
  );
  expect(expenseButtonElement).toBeOnTheScreen();
  const expenseTextElement =
    within(expenseButtonElement).getByTestId('button-text');
  expect(expenseTextElement).toBeOnTheScreen();
  expect(expenseTextElement).toHaveStyle({color: iconGrey});

  const incomeButtonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-income',
  );
  expect(incomeButtonElement).toBeOnTheScreen();
  const incomeTextElement =
    within(incomeButtonElement).getByTestId('button-text');
  expect(incomeTextElement).toBeOnTheScreen();
  expect(incomeTextElement).toHaveStyle({color: primary});
});

test('should render transactionstemplate - flatlist', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const flatlistElement = screen.getByTestId('transactionstemplate-flatlist');
  expect(flatlistElement).toBeOnTheScreen();
});

test('should render transactionstemplate - TransactionsItem', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const flatlistElement = screen.getByTestId('transactionstemplate-flatlist');
  expect(flatlistElement).toBeOnTheScreen();
  const TransactionsItemElement = within(flatlistElement).getByTestId(
    'transactionstemplate-transactionsitem-1',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
});

test('should render transactionstemplate - TransactionsItem - logo', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const flatlistElement = screen.getByTestId('transactionstemplate-flatlist');
  expect(flatlistElement).toBeOnTheScreen();
  const TransactionsItemElement = within(flatlistElement).getByTestId(
    'transactionstemplate-transactionsitem-1',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
  const imgElement = within(TransactionsItemElement).getByTestId(
    'transactionsitem-img',
  );
  expect(imgElement).toBeOnTheScreen();
});

test('should render transactionstemplate - TransactionsItem - category', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const flatlistElement = screen.getByTestId('transactionstemplate-flatlist');
  expect(flatlistElement).toBeOnTheScreen();
  const TransactionsItemElement = within(flatlistElement).getByTestId(
    'transactionstemplate-transactionsitem-1',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
  const labelElement = within(TransactionsItemElement).getByTestId(
    'transactionsitem-category',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('Withdraw');
});

test('should render transactionstemplate - TransactionsItem - client name', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const flatlistElement = screen.getByTestId('transactionstemplate-flatlist');
  expect(flatlistElement).toBeOnTheScreen();
  const TransactionsItemElement = within(flatlistElement).getByTestId(
    'transactionstemplate-transactionsitem-1',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
  const labelElement = within(TransactionsItemElement).getByTestId(
    'transactionsitem-clientname',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('ATM');
});

test('should render transactionstemplate - TransactionsItem - value', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const flatlistElement = screen.getByTestId('transactionstemplate-flatlist');
  expect(flatlistElement).toBeOnTheScreen();
  const TransactionsItemElement = within(flatlistElement).getByTestId(
    'transactionstemplate-transactionsitem-1',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
  const labelElement = within(TransactionsItemElement).getByTestId(
    'transactionsitem-value',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('-$1,000');
  expect(labelElement).toHaveStyle({color: red});
});

test('should render transactionstemplate - TransactionsItem - date', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const flatlistElement = screen.getByTestId('transactionstemplate-flatlist');
  expect(flatlistElement).toBeOnTheScreen();
  const TransactionsItemElement = within(flatlistElement).getByTestId(
    'transactionstemplate-transactionsitem-1',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
  const labelElement = within(TransactionsItemElement).getByTestId(
    'transactionsitem-date',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('3d ago');
});
