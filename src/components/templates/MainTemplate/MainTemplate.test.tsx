import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import {MarketData} from 'data/index';
import TestRenderer from 'react-test-renderer';
import MainTemplate, {MainTemplateProps} from './MainTemplate';

const mockOnNotificationPress = jest.fn();
const mockOnUserProfilePress = jest.fn();
const mockOnDetailsPress = jest.fn();
const mockOnTransferPress = jest.fn();
const mockOnWithdrawPress = jest.fn();
const mockOnViewMorePress = jest.fn();
const props: MainTemplateProps = {
  onNotificationPress: mockOnNotificationPress,
  onUserProfilePress: mockOnUserProfilePress,
  onDetailsPress: mockOnDetailsPress,
  onTransferPress: mockOnTransferPress,
  onWithdrawPress: mockOnWithdrawPress,
  onViewMorePress: mockOnViewMorePress,
  testId: 'test-maintemplate-id',
  data: MarketData,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<MainTemplate {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render maintemplate', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
});
test('should render maintemplate - userarea', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
  expect(userareaElement).toBeOnTheScreen();
});

test('should render maintemplate - userarea - UserBar', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
  expect(userareaElement).toBeOnTheScreen();
  const UserBarElement =
    within(userareaElement).getByTestId('userarea-userbar');
  expect(UserBarElement).toBeOnTheScreen();
});

test('should render maintemplate - userarea - UserBar with welcome label', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
  expect(userareaElement).toBeOnTheScreen();
  const UserBarElement =
    within(userareaElement).getByTestId('userarea-userbar');
  expect(UserBarElement).toBeOnTheScreen();
  const UserBarLabelElement = screen.getByTestId('userbar-welcome');
  expect(UserBarLabelElement).toBeOnTheScreen();
});

test('should render maintemplate - userarea - UserBar with user name', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
  expect(userareaElement).toBeOnTheScreen();
  const UserBarElement =
    within(userareaElement).getByTestId('userarea-userbar');
  expect(UserBarElement).toBeOnTheScreen();
  const UserBarHeaderElement = screen.getByTestId('userbar-username');
  expect(UserBarHeaderElement).toBeOnTheScreen();
});

test('should render maintemplate - userarea - UserBar with working notification button', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
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

test('should render maintemplate - userarea - UserBar with working user profile button', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
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

test('should render maintemplate - userarea - balancebox', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
  expect(userareaElement).toBeOnTheScreen();
  const balanceboxElement = within(userareaElement).getByTestId(
    'userarea-balancebox',
  );
  expect(balanceboxElement).toBeOnTheScreen();
});

test('should render maintemplate - userarea - balancebox - top label', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
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

test('should render maintemplate - userarea - balancebox - header with cash amount', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
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

test('should render maintemplate - userarea - balancebox - details button', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
  expect(userareaElement).toBeOnTheScreen();
  const balanceboxElement = within(userareaElement).getByTestId(
    'userarea-balancebox',
  );
  expect(balanceboxElement).toBeOnTheScreen();
  const balanceboxButtonElement =
    within(balanceboxElement).getByTestId('balancebox-button');
  expect(balanceboxButtonElement).toBeOnTheScreen();
});

test('should render maintemplate - userarea - balancebox - details button - working onDetailsPress', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
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

test('should render maintemplate - userarea - balancebox - percent label', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
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

test('should render maintemplate - userarea - balancebox - green/red wave img', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
  expect(userareaElement).toBeOnTheScreen();
  const balanceboxElement = within(userareaElement).getByTestId(
    'userarea-balancebox',
  );
  expect(balanceboxElement).toBeOnTheScreen();
  const balanceboxImgElement =
    within(balanceboxElement).getByTestId('balancebox-wave');
  expect(balanceboxImgElement).toBeOnTheScreen();
});

test('should render maintemplate - userarea - TransferAndWithdraw', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
  expect(userareaElement).toBeOnTheScreen();
  const TransferAndWithdrawElement = within(userareaElement).getByTestId(
    'userarea-transferandwithdraw',
  );
  expect(TransferAndWithdrawElement).toBeOnTheScreen();
});

test('should render maintemplate - userarea - TransferAndWithdraw - render transfer button', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
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

test('should render maintemplate - userarea - TransferAndWithdraw - render withdraw button', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
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

test('should render maintemplate - userarea - TransferAndWithdraw - should handle mockOnTransferPress', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
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

test('should render maintemplate - userarea - TransferAndWithdraw - should handle mockOnWithdrawPress', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
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
