import '@testing-library/jest-native/extend-expect';
import {render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import {red} from 'theme/colors';
import TransactionsItem, {TransactionsItemProps} from './TransactionsItem';

const props: TransactionsItemProps = {
  testId: 'test-transactionsitem-id',
  expense: true,
  category: 'Withdraw',
  clientname: 'ATM',
  value: '-$1,000',
  date: '3d ago',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<TransactionsItem {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render TransactionsItem', () => {
  render(<TransactionsItem {...props} />);
  const TransactionsItemElement = screen.getByTestId(
    'test-transactionsitem-id',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
});

test('should render TransactionsItem - logo', () => {
  render(<TransactionsItem {...props} />);
  const TransactionsItemElement = screen.getByTestId(
    'test-transactionsitem-id',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
  const imgElement = within(TransactionsItemElement).getByTestId(
    'transactionsitem-img',
  );
  expect(imgElement).toBeOnTheScreen();
});

test('should render TransactionsItem - category', () => {
  render(<TransactionsItem {...props} />);
  const TransactionsItemElement = screen.getByTestId(
    'test-transactionsitem-id',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
  const labelElement = within(TransactionsItemElement).getByTestId(
    'transactionsitem-category',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('Withdraw');
});

test('should render TransactionsItem - client name', () => {
  render(<TransactionsItem {...props} />);
  const TransactionsItemElement = screen.getByTestId(
    'test-transactionsitem-id',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
  const labelElement = within(TransactionsItemElement).getByTestId(
    'transactionsitem-clientname',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('ATM');
});

test('should render TransactionsItem - value', () => {
  render(<TransactionsItem {...props} />);
  const TransactionsItemElement = screen.getByTestId(
    'test-transactionsitem-id',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
  const labelElement = within(TransactionsItemElement).getByTestId(
    'transactionsitem-value',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('-$1,000');
  expect(labelElement).toHaveStyle({color: red});
});

test('should render TransactionsItem - date', () => {
  render(<TransactionsItem {...props} />);
  const TransactionsItemElement = screen.getByTestId(
    'test-transactionsitem-id',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
  const labelElement = within(TransactionsItemElement).getByTestId(
    'transactionsitem-date',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('3d ago');
});
