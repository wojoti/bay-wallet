import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import TransferAndWithdraw, {
  TransferAndWithdrawProps,
} from './TransferAndWithdraw';

const mockOnTransferPress = jest.fn();
const mockOnWithdrawPress = jest.fn();
const props: TransferAndWithdrawProps = {
  testId: 'test-transferandwithdraw-id',
  onTransferPress: mockOnTransferPress,
  onWithdrawPress: mockOnWithdrawPress,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<TransferAndWithdraw {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render TransferAndWithdraw', () => {
  render(<TransferAndWithdraw {...props} />);
  const TransferAndWithdrawElement = screen.getByTestId(
    'test-transferandwithdraw-id',
  );
  expect(TransferAndWithdrawElement).toBeOnTheScreen();
});
