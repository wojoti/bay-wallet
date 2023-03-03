import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import UserArea, {UserAreaProps} from './UserArea';

const mockOnNotificationPress = jest.fn();
const mockOnUserProfilePress = jest.fn();
const mockOnDetailsPress = jest.fn();
const mockOnTransferPress = jest.fn();
const mockOnWithdrawPress = jest.fn();
const props: UserAreaProps = {
  onNotificationPress: mockOnNotificationPress,
  onUserProfilePress: mockOnUserProfilePress,
  onDetailsPress: mockOnDetailsPress,
  onTransferPress: mockOnTransferPress,
  onWithdrawPress: mockOnWithdrawPress,
  testId: 'test-userarea-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<UserArea {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render userarea', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
});

test('should render userarea - UserBar', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const UserBarElement =
    within(userareaElement).getByTestId('userarea-userbar');
  expect(UserBarElement).toBeOnTheScreen();
});

test('should render userarea - UserBar with welcome label', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const UserBarElement =
    within(userareaElement).getByTestId('userarea-userbar');
  expect(UserBarElement).toBeOnTheScreen();
  const UserBarLabelElement = screen.getByTestId('userbar-welcome');
  expect(UserBarLabelElement).toBeOnTheScreen();
});

test('should render userarea - UserBar with user name', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const UserBarElement =
    within(userareaElement).getByTestId('userarea-userbar');
  expect(UserBarElement).toBeOnTheScreen();
  const UserBarHeaderElement = screen.getByTestId('userbar-username');
  expect(UserBarHeaderElement).toBeOnTheScreen();
});

test('should render userarea - UserBar with working notification button', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const UserBarElement =
    within(userareaElement).getByTestId('userarea-userbar');
  expect(UserBarElement).toBeOnTheScreen();
  const UserBarNotificationElement = screen.getByTestId('userbar-notification');
  expect(UserBarNotificationElement).toBeOnTheScreen();
  expect(mockOnNotificationPress).toBeCalledTimes(0);
  fireEvent.press(UserBarNotificationElement);
  expect(mockOnNotificationPress).toBeCalledTimes(1);
});

test('should render userarea - UserBar with working user profile button', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const UserBarElement =
    within(userareaElement).getByTestId('userarea-userbar');
  expect(UserBarElement).toBeOnTheScreen();
  const UserBarUserProfileElement = screen.getByTestId('userbar-userprofile');
  expect(UserBarUserProfileElement).toBeOnTheScreen();
  expect(mockOnUserProfilePress).toBeCalledTimes(0);
  fireEvent.press(UserBarUserProfileElement);
  expect(mockOnUserProfilePress).toBeCalledTimes(1);
});

test('should render userarea - balancebox', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const balanceboxElement = within(userareaElement).getByTestId(
    'userarea-balancebox',
  );
  expect(balanceboxElement).toBeOnTheScreen();
});

test('should render userarea - balancebox - top label', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const balanceboxElement = within(userareaElement).getByTestId(
    'userarea-balancebox',
  );
  expect(balanceboxElement).toBeOnTheScreen();
  const balanceboxLabelElement =
    within(balanceboxElement).getByTestId('balancebox-label');
  expect(balanceboxLabelElement).toBeOnTheScreen();
  expect(balanceboxLabelElement).toHaveTextContent('Your main balance');
});

test('should render userarea - balancebox - header with cash amount', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const balanceboxElement = within(userareaElement).getByTestId(
    'userarea-balancebox',
  );
  expect(balanceboxElement).toBeOnTheScreen();
  const balanceboxHeaderElement =
    within(balanceboxElement).getByTestId('balancebox-amount');
  expect(balanceboxHeaderElement).toBeOnTheScreen();
  expect(balanceboxHeaderElement).toHaveTextContent('$ 45.500,12');
});

test('should render userarea - balancebox - details button', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const balanceboxElement = within(userareaElement).getByTestId(
    'userarea-balancebox',
  );
  expect(balanceboxElement).toBeOnTheScreen();
  const balanceboxButtonElement =
    within(balanceboxElement).getByTestId('balancebox-button');
  expect(balanceboxButtonElement).toBeOnTheScreen();
});

test('should render userarea - balancebox - details button - working onDetailsPress', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const balanceboxElement = within(userareaElement).getByTestId(
    'userarea-balancebox',
  );
  expect(balanceboxElement).toBeOnTheScreen();
  const balanceboxButtonElement =
    within(balanceboxElement).getByTestId('balancebox-button');
  expect(balanceboxButtonElement).toBeOnTheScreen();
  expect(mockOnDetailsPress).toBeCalledTimes(0);
  fireEvent.press(balanceboxButtonElement);
  expect(mockOnDetailsPress).toBeCalledTimes(1);
});

test('should render userarea - balancebox - percent label', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const balanceboxElement = within(userareaElement).getByTestId(
    'userarea-balancebox',
  );
  expect(balanceboxElement).toBeOnTheScreen();
  const balanceboxLabelElement =
    within(balanceboxElement).getByTestId('balancebox-percent');
  expect(balanceboxLabelElement).toBeOnTheScreen();
  expect(balanceboxLabelElement).toHaveTextContent('5 %');
});

test('should render userarea - balancebox - green/red wave img', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const balanceboxElement = within(userareaElement).getByTestId(
    'userarea-balancebox',
  );
  expect(balanceboxElement).toBeOnTheScreen();
  const balanceboxImgElement =
    within(balanceboxElement).getByTestId('balancebox-wave');
  expect(balanceboxImgElement).toBeOnTheScreen();
});

test('should render userarea - TransferAndWithdraw', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const TransferAndWithdrawElement = within(userareaElement).getByTestId(
    'userarea-transferandwithdraw',
  );
  expect(TransferAndWithdrawElement).toBeOnTheScreen();
});

test('should render userarea - TransferAndWithdraw - render transfer button', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const TransferAndWithdrawElement = within(userareaElement).getByTestId(
    'userarea-transferandwithdraw',
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

test('should render userarea - TransferAndWithdraw - render withdraw button', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const TransferAndWithdrawElement = within(userareaElement).getByTestId(
    'userarea-transferandwithdraw',
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

test('should render userarea - TransferAndWithdraw - should handle mockOnTransferPress', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const TransferAndWithdrawElement = within(userareaElement).getByTestId(
    'userarea-transferandwithdraw',
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

test('should render userarea - TransferAndWithdraw - should handle mockOnWithdrawPress', () => {
  render(<UserArea {...props} />);
  const userareaElement = screen.getByTestId('test-userarea-id');
  expect(userareaElement).toBeOnTheScreen();
  const TransferAndWithdrawElement = within(userareaElement).getByTestId(
    'userarea-transferandwithdraw',
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
