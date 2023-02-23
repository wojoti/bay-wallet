import '@testing-library/jest-native/extend-expect';
import {screen} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import TestRenderer from 'react-test-renderer';
import renderWithProviders from 'root/test-utils';
import {store} from 'store/store';
import LoginScreen, {LoginScreenProps} from './LoginScreen';

const props: LoginScreenProps = {
  testId: 'test-loginscreen-id',
};

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockNavigate}),
  useIsFocused: jest.fn(),
}));

test('should match snapshot', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <LoginScreen {...props} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render loginscreen', () => {
  renderWithProviders(<LoginScreen {...props} />);
  const loginscreenElement = screen.getByTestId('test-loginscreen-id');
  expect(loginscreenElement).toBeOnTheScreen();
});
