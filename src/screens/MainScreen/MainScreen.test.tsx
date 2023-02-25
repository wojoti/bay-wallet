import '@testing-library/jest-native/extend-expect';
import {screen} from '@testing-library/react-native';
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
