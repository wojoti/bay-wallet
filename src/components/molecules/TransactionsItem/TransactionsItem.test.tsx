import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
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
