import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import OperationBottomBar, {
  OperationBottomBarProps,
} from './OperationBottomBar';

const mockOnCardPress = jest.fn();
const mockOnMenuPress = jest.fn();
const mockOnChartPress = jest.fn();
const props: OperationBottomBarProps = {
  testId: 'test-operationbottombar-id',
  onCardPress: mockOnCardPress,
  onMenuPress: mockOnMenuPress,
  onChartPress: mockOnChartPress,
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

test('should render OperationBottomBar - cards button', () => {
  render(<OperationBottomBar {...props} />);
  const OperationBottomBarElement = screen.getByTestId(
    'test-operationbottombar-id',
  );
  expect(OperationBottomBarElement).toBeOnTheScreen();
  const buttonElement = within(OperationBottomBarElement).getByTestId(
    'operationbottombar-cards',
  );
  expect(buttonElement).toBeOnTheScreen();
});
test('should render OperationBottomBar - menu button', () => {
  render(<OperationBottomBar {...props} />);
  const OperationBottomBarElement = screen.getByTestId(
    'test-operationbottombar-id',
  );
  expect(OperationBottomBarElement).toBeOnTheScreen();
  const buttonElement = within(OperationBottomBarElement).getByTestId(
    'operationbottombar-menu',
  );
  expect(buttonElement).toBeOnTheScreen();
});
test('should render OperationBottomBar - chart button', () => {
  render(<OperationBottomBar {...props} />);
  const OperationBottomBarElement = screen.getByTestId(
    'test-operationbottombar-id',
  );
  expect(OperationBottomBarElement).toBeOnTheScreen();
  const buttonElement = within(OperationBottomBarElement).getByTestId(
    'operationbottombar-chart',
  );
  expect(buttonElement).toBeOnTheScreen();
});

test('should render OperationBottomBar - cards button - handle onPress', () => {
  render(<OperationBottomBar {...props} />);
  const OperationBottomBarElement = screen.getByTestId(
    'test-operationbottombar-id',
  );
  expect(OperationBottomBarElement).toBeOnTheScreen();
  const buttonElement = within(OperationBottomBarElement).getByTestId(
    'operationbottombar-cards',
  );
  expect(buttonElement).toBeOnTheScreen();
  expect(mockOnCardPress).toBeCalledTimes(0);
  fireEvent.press(buttonElement);
  expect(mockOnCardPress).toBeCalledTimes(1);
});
test('should render OperationBottomBar - menu button - handle onPress', () => {
  render(<OperationBottomBar {...props} />);
  const OperationBottomBarElement = screen.getByTestId(
    'test-operationbottombar-id',
  );
  expect(OperationBottomBarElement).toBeOnTheScreen();
  const buttonElement = within(OperationBottomBarElement).getByTestId(
    'operationbottombar-menu',
  );
  expect(buttonElement).toBeOnTheScreen();
  expect(mockOnMenuPress).toBeCalledTimes(0);
  fireEvent.press(buttonElement);
  expect(mockOnMenuPress).toBeCalledTimes(1);
});
test('should render OperationBottomBar - chart button - handle onPress', () => {
  render(<OperationBottomBar {...props} />);
  const OperationBottomBarElement = screen.getByTestId(
    'test-operationbottombar-id',
  );
  expect(OperationBottomBarElement).toBeOnTheScreen();
  const buttonElement = within(OperationBottomBarElement).getByTestId(
    'operationbottombar-chart',
  );
  expect(buttonElement).toBeOnTheScreen();
  expect(mockOnChartPress).toBeCalledTimes(0);
  fireEvent.press(buttonElement);
  expect(mockOnChartPress).toBeCalledTimes(1);
});
