import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import OperationBottomBar, {
  OperationBottomBarProps,
} from './OperationBottomBar';

const mockOnCardPress = jest.fn();
const mockOnMenuPress = jest.fn();
const mockOnProfilePress = jest.fn();
const props: OperationBottomBarProps = {
  testId: 'test-operationbottombar-id',
  onCardPress: mockOnCardPress,
  onMenuPress: mockOnMenuPress,
  onProfilePress: mockOnProfilePress,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<OperationBottomBar {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render OperationBottomBar', () => {
  render(<OperationBottomBar {...props} />);
  const OperationBottomBarElement = screen.getByTestId(
    'test-operationbottombar-id',
  );
  expect(OperationBottomBarElement).toBeOnTheScreen();
});
