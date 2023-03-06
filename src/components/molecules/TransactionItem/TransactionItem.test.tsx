import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import TransactionItem, {TransactionItemProps} from './TransactionItem';

const props: TransactionItemProps = {
  testId: 'test-transactionitem-id',
  expense: true,
  category: 'Withdraw',
  clientname: 'ATM',
  value: '-$1,000',
  date: '3d ago',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<TransactionItem {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render TransactionItem', () => {
  render(<TransactionItem {...props} />);
  const TransactionItemElement = screen.getByTestId('test-transactionitem-id');
  expect(TransactionItemElement).toBeOnTheScreen();
});
