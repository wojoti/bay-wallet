import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
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

test('should render TransferAndWithdraw - render transfer button', () => {
  render(<TransferAndWithdraw {...props} />);
  const TransferAndWithdrawElement = screen.getByTestId(
    'test-transferandwithdraw-id',
  );
  expect(TransferAndWithdrawElement).toBeOnTheScreen();
  const TransferAndWithdrawButtonElement = within(
    TransferAndWithdrawElement,
  ).getByTestId('transfer-button');
  expect(TransferAndWithdrawButtonElement).toBeOnTheScreen();
  const imgElement = within(TransferAndWithdrawButtonElement).getByTestId(
    'transfer-img',
  );
  expect(imgElement).toBeOnTheScreen();
  const labelElement = within(TransferAndWithdrawButtonElement).getByTestId(
    'transfer-label',
  );
  expect(labelElement).toBeOnTheScreen();
});

test('should render TransferAndWithdraw - render withdraw button', () => {
  render(<TransferAndWithdraw {...props} />);
  const TransferAndWithdrawElement = screen.getByTestId(
    'test-transferandwithdraw-id',
  );
  expect(TransferAndWithdrawElement).toBeOnTheScreen();
  const TransferAndWithdrawButtonElement = within(
    TransferAndWithdrawElement,
  ).getByTestId('withdraw-button');
  expect(TransferAndWithdrawButtonElement).toBeOnTheScreen();
  const imgElement = within(TransferAndWithdrawButtonElement).getByTestId(
    'withdraw-img',
  );
  expect(imgElement).toBeOnTheScreen();
  const labelElement = within(TransferAndWithdrawButtonElement).getByTestId(
    'withdraw-label',
  );
  expect(labelElement).toBeOnTheScreen();
});

test('should handle mockOnTransferPress', () => {
  render(<TransferAndWithdraw {...props} />);
  const TransferAndWithdrawElement = screen.getByTestId(
    'test-transferandwithdraw-id',
  );
  expect(TransferAndWithdrawElement).toBeOnTheScreen();
  const TransferAndWithdrawButtonElement = within(
    TransferAndWithdrawElement,
  ).getByTestId('transfer-button');
  expect(TransferAndWithdrawButtonElement).toBeOnTheScreen();
  expect(mockOnTransferPress).toBeCalledTimes(0);
  fireEvent.press(TransferAndWithdrawButtonElement);
  expect(mockOnTransferPress).toBeCalledTimes(1);
});

test('should handle mockOnWithdrawPress', () => {
  render(<TransferAndWithdraw {...props} />);
  const TransferAndWithdrawElement = screen.getByTestId(
    'test-transferandwithdraw-id',
  );
  expect(TransferAndWithdrawElement).toBeOnTheScreen();
  const TransferAndWithdrawButtonElement = within(
    TransferAndWithdrawElement,
  ).getByTestId('withdraw-button');
  expect(TransferAndWithdrawButtonElement).toBeOnTheScreen();
  expect(mockOnWithdrawPress).toBeCalledTimes(0);
  fireEvent.press(TransferAndWithdrawButtonElement);
  expect(mockOnWithdrawPress).toBeCalledTimes(1);
});
