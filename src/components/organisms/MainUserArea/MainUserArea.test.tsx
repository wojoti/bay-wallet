import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import MainUserArea, {MainUserAreaProps} from './MainUserArea';

const mockOnNotificationPress = jest.fn();
const mockOnUserProfilePress = jest.fn();
const mockOnDetailsPress = jest.fn();
const mockOnTransferPress = jest.fn();
const mockOnWithdrawPress = jest.fn();
const props: MainUserAreaProps = {
  onNotificationPress: mockOnNotificationPress,
  onUserProfilePress: mockOnUserProfilePress,
  onDetailsPress: mockOnDetailsPress,
  onTransferPress: mockOnTransferPress,
  onWithdrawPress: mockOnWithdrawPress,
  testId: 'test-mainuserarea-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<MainUserArea {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render mainuserarea', () => {
  render(<MainUserArea {...props} />);
  const mainuserareaElement = screen.getByTestId('test-mainuserarea-id');
  expect(mainuserareaElement).toBeOnTheScreen();
});
