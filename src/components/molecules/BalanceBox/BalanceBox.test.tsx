import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import BalanceBox, {BalanceBoxProps} from './BalanceBox';

const mockOnDetailsPress = jest.fn();
const props: BalanceBoxProps = {
  onDetailsPress: mockOnDetailsPress,
  amount: '45.500,12',
  testId: 'test-balancebox-id',
  percent: '5',
  balanceLabel: 'Your main balance',
  detailsLabel: 'Details >',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<BalanceBox {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render balancebox', () => {
  render(<BalanceBox {...props} />);
  const balanceboxElement = screen.getByTestId('test-balancebox-id');
  expect(balanceboxElement).toBeOnTheScreen();
});

test('should render balancebox - top label', () => {
  render(<BalanceBox {...props} />);
  const balanceboxElement = screen.getByTestId('test-balancebox-id');
  expect(balanceboxElement).toBeOnTheScreen();
  const balanceboxLabelElement =
    within(balanceboxElement).getByTestId('balancebox-label');
  expect(balanceboxLabelElement).toBeOnTheScreen();
  expect(balanceboxLabelElement).toHaveTextContent('Your main balance');
});

test('should render balancebox - header with cash amount', () => {
  render(<BalanceBox {...props} />);
  const balanceboxElement = screen.getByTestId('test-balancebox-id');
  expect(balanceboxElement).toBeOnTheScreen();
  const balanceboxHeaderElement =
    within(balanceboxElement).getByTestId('balancebox-amount');
  expect(balanceboxHeaderElement).toBeOnTheScreen();
  expect(balanceboxHeaderElement).toHaveTextContent('$ 45.500,12');
});

test('should render balancebox - details button', () => {
  render(<BalanceBox {...props} />);
  const balanceboxElement = screen.getByTestId('test-balancebox-id');
  expect(balanceboxElement).toBeOnTheScreen();
  const balanceboxButtonElement =
    within(balanceboxElement).getByTestId('balancebox-button');
  expect(balanceboxButtonElement).toBeOnTheScreen();
});

test('should render balancebox - details button - working onDetailsPress', () => {
  render(<BalanceBox {...props} />);
  const balanceboxElement = screen.getByTestId('test-balancebox-id');
  expect(balanceboxElement).toBeOnTheScreen();
  const balanceboxButtonElement =
    within(balanceboxElement).getByTestId('balancebox-button');
  expect(balanceboxButtonElement).toBeOnTheScreen();
  expect(mockOnDetailsPress).toBeCalledTimes(0);
  fireEvent.press(balanceboxButtonElement);
  expect(mockOnDetailsPress).toBeCalledTimes(1);
});

test('should render balancebox - percent label', () => {
  render(<BalanceBox {...props} />);
  const balanceboxElement = screen.getByTestId('test-balancebox-id');
  expect(balanceboxElement).toBeOnTheScreen();
  const balanceboxLabelElement =
    within(balanceboxElement).getByTestId('balancebox-percent');
  expect(balanceboxLabelElement).toBeOnTheScreen();
  expect(balanceboxLabelElement).toHaveTextContent('5 %');
});

test('should render balancebox - green/red wave img', () => {
  render(<BalanceBox {...props} />);
  const balanceboxElement = screen.getByTestId('test-balancebox-id');
  expect(balanceboxElement).toBeOnTheScreen();
  const balanceboxImgElement =
    within(balanceboxElement).getByTestId('balancebox-wave');
  expect(balanceboxImgElement).toBeOnTheScreen();
});
