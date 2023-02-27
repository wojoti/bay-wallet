import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import UserBar, {UserBarProps} from './UserBar';

const mockOnNotificationPress = jest.fn();
const mockOnUserProfilePress = jest.fn();
const props: UserBarProps = {
  testId: 'test-userbar-id',
  onNotificationPress: mockOnNotificationPress,
  onUserProfilePress: mockOnUserProfilePress,
  username: 'test username',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<UserBar {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render UserBar', () => {
  render(<UserBar {...props} />);
  const UserBarElement = screen.getByTestId('test-userbar-id');
  expect(UserBarElement).toBeOnTheScreen();
});

test('should render UserBar with welcome label', () => {
  render(<UserBar {...props} />);
  const UserBarElement = screen.getByTestId('test-userbar-id');
  expect(UserBarElement).toBeOnTheScreen();
  const UserBarLabelElement = screen.getByTestId('userbar-welcome');
  expect(UserBarLabelElement).toBeOnTheScreen();
});

test('should render UserBar with user name', () => {
  render(<UserBar {...props} />);
  const UserBarElement = screen.getByTestId('test-userbar-id');
  expect(UserBarElement).toBeOnTheScreen();
  const UserBarHeaderElement = screen.getByTestId('userbar-username');
  expect(UserBarHeaderElement).toBeOnTheScreen();
});

test('should render UserBar with working notification button', () => {
  render(<UserBar {...props} />);
  const UserBarElement = screen.getByTestId('test-userbar-id');
  expect(UserBarElement).toBeOnTheScreen();
  const UserBarNotificationElement = screen.getByTestId('userbar-notification');
  expect(UserBarNotificationElement).toBeOnTheScreen();
  expect(mockOnNotificationPress).toBeCalledTimes(0);
  fireEvent.press(UserBarNotificationElement);
  expect(mockOnNotificationPress).toBeCalledTimes(1);
});

test('should render UserBar with working user profile button', () => {
  render(<UserBar {...props} />);
  const UserBarElement = screen.getByTestId('test-userbar-id');
  expect(UserBarElement).toBeOnTheScreen();
  const UserBarUserProfileElement = screen.getByTestId('userbar-userprofile');
  expect(UserBarUserProfileElement).toBeOnTheScreen();
  expect(mockOnUserProfilePress).toBeCalledTimes(0);
  fireEvent.press(UserBarUserProfileElement);
  expect(mockOnUserProfilePress).toBeCalledTimes(1);
});
