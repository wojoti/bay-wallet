import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
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
