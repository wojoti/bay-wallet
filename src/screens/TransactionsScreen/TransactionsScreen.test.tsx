import '@testing-library/jest-native/extend-expect';
import {screen} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import TestRenderer from 'react-test-renderer';
import renderWithProviders from 'root/test-utils';
import {store} from 'store/store';
import TransactionsScreen, {
  TransactionsScreenProps,
} from './TransactionsScreen';

const props: TransactionsScreenProps = {
  testId: 'test-transactionsscreen-id',
};

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockNavigate}),
  useIsFocused: jest.fn(),
}));

test('should match snapshot', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <TransactionsScreen {...props} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render TransactionsScreen', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const TransactionsScreenElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(TransactionsScreenElement).toBeOnTheScreen();
});
