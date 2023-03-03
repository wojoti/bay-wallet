import '@testing-library/jest-native/extend-expect';
import {screen, within} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import TestRenderer from 'react-test-renderer';
import renderWithProviders from 'root/test-utils';
import {store} from 'store/store';
import MainScreen, {MainScreenProps} from './MainScreen';

const props: MainScreenProps = {
  testId: 'test-mainscreen-id',
};

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockNavigate}),
  useIsFocused: jest.fn(),
}));

test('should match snapshot', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <MainScreen {...props} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render MainScreen', () => {
  renderWithProviders(<MainScreen {...props} />);
  const MainScreenElement = screen.getByTestId('test-mainscreen-id');
  expect(MainScreenElement).toBeOnTheScreen();
});

test('should render maintemplate - userarea', () => {
  renderWithProviders(<MainScreen {...props} />);
  const maintemplateElement = screen.getByTestId('test-mainscreen-id');
  expect(maintemplateElement).toBeOnTheScreen();
  const userareaElement = within(maintemplateElement).getByTestId(
    'maintemplate-userarea',
  );
  expect(userareaElement).toBeOnTheScreen();
});

test('should render maintemplate - userarea - UserBar', () => {
  renderWithProviders(<MainScreen {...props} />);
  const maintemplateElement = screen.getByTestId('test-mainscreen-id');
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
  renderWithProviders(<MainScreen {...props} />);
  const maintemplateElement = screen.getByTestId('test-mainscreen-id');
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
  renderWithProviders(<MainScreen {...props} />);
  const maintemplateElement = screen.getByTestId('test-mainscreen-id');
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

test('should render maintemplate - userarea - UserBar with notification button', () => {
  renderWithProviders(<MainScreen {...props} />);
  const maintemplateElement = screen.getByTestId('test-mainscreen-id');
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
});

test('should render maintemplate - userarea - UserBar with  user profile button', () => {
  renderWithProviders(<MainScreen {...props} />);
  const maintemplateElement = screen.getByTestId('test-mainscreen-id');
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
});

test('should render maintemplate - userarea - balancebox', () => {
  renderWithProviders(<MainScreen {...props} />);
  const maintemplateElement = screen.getByTestId('test-mainscreen-id');
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
  renderWithProviders(<MainScreen {...props} />);
  const maintemplateElement = screen.getByTestId('test-mainscreen-id');
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
  renderWithProviders(<MainScreen {...props} />);
  const maintemplateElement = screen.getByTestId('test-mainscreen-id');
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
  renderWithProviders(<MainScreen {...props} />);
  const maintemplateElement = screen.getByTestId('test-mainscreen-id');
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

test('should render maintemplate - userarea - balancebox - percent label', () => {
  renderWithProviders(<MainScreen {...props} />);
  const maintemplateElement = screen.getByTestId('test-mainscreen-id');
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
  renderWithProviders(<MainScreen {...props} />);
  const maintemplateElement = screen.getByTestId('test-mainscreen-id');
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
  renderWithProviders(<MainScreen {...props} />);
  const maintemplateElement = screen.getByTestId('test-mainscreen-id');
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
  renderWithProviders(<MainScreen {...props} />);
  const maintemplateElement = screen.getByTestId('test-mainscreen-id');
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
  renderWithProviders(<MainScreen {...props} />);
  const maintemplateElement = screen.getByTestId('test-mainscreen-id');
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
