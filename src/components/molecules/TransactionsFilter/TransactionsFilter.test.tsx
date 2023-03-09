import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import {iconGrey, primary} from 'theme/colors';
import TransactionsFilter, {
  TransactionsFilterProps,
} from './TransactionsFilter';

const mockOnFilterPress = jest.fn<
  TransactionsFilterProps['onFilterPress'],
  [id: number]
>();
const props: TransactionsFilterProps = {
  testId: 'test-transactionsfilter-id',
  onFilterPress: mockOnFilterPress,
  selectedId: 0,
};

const modifiedProps: TransactionsFilterProps = {
  ...props,
  selectedId: 2,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<TransactionsFilter {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render TransactionsFilter', () => {
  render(<TransactionsFilter {...props} />);
  const TransactionsFilterElement = screen.getByTestId(
    'test-transactionsfilter-id',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
});

test('should render TransactionsFilter - All button', () => {
  render(<TransactionsFilter {...props} />);
  const TransactionsFilterElement = screen.getByTestId(
    'test-transactionsfilter-id',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const buttonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-all',
  );
  expect(buttonElement).toBeOnTheScreen();
});

test('should render TransactionsFilter - All button - onPress', () => {
  render(<TransactionsFilter {...props} />);
  const TransactionsFilterElement = screen.getByTestId(
    'test-transactionsfilter-id',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const buttonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-all',
  );
  expect(buttonElement).toBeOnTheScreen();
  fireEvent.press(buttonElement);
  expect(mockOnFilterPress).toBeCalledWith(0);
});

test('should render TransactionsFilter - Expense button', () => {
  render(<TransactionsFilter {...props} />);
  const TransactionsFilterElement = screen.getByTestId(
    'test-transactionsfilter-id',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const buttonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-expense',
  );
  expect(buttonElement).toBeOnTheScreen();
});

test('should render TransactionsFilter - Expense button - onPress', () => {
  render(<TransactionsFilter {...props} />);
  const TransactionsFilterElement = screen.getByTestId(
    'test-transactionsfilter-id',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const buttonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-expense',
  );
  expect(buttonElement).toBeOnTheScreen();
  fireEvent.press(buttonElement);
  expect(mockOnFilterPress).toBeCalledWith(1);
});

test('should render TransactionsFilter - Income button', () => {
  render(<TransactionsFilter {...props} />);
  const TransactionsFilterElement = screen.getByTestId(
    'test-transactionsfilter-id',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const buttonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-income',
  );
  expect(buttonElement).toBeOnTheScreen();
});

test('should render TransactionsFilter - Income button - onPress', () => {
  render(<TransactionsFilter {...props} />);
  const TransactionsFilterElement = screen.getByTestId(
    'test-transactionsfilter-id',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const buttonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-income',
  );
  expect(buttonElement).toBeOnTheScreen();
  fireEvent.press(buttonElement);
  expect(mockOnFilterPress).toBeCalledWith(2);
});

test('should render TransactionsFilter - selected id', () => {
  render(<TransactionsFilter {...props} />);
  const TransactionsFilterElement = screen.getByTestId(
    'test-transactionsfilter-id',
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

test('should render TransactionsFilter - different selected id', () => {
  render(<TransactionsFilter {...modifiedProps} />);
  const TransactionsFilterElement = screen.getByTestId(
    'test-transactionsfilter-id',
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
