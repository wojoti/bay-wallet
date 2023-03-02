import '@testing-library/jest-native/extend-expect';
import {render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import BalanceBox, {BalanceBoxProps} from './BalanceBox';

const mockOnDetailsPress = jest.fn();
const props: BalanceBoxProps = {
  onDetailsPress: mockOnDetailsPress,
  amount: '45.500,12',
  testId: 'test-balancebox-id',
  percent: '5',
  balanceLabel: Your main balance,
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

test('should render balancebox - top welcoming label', () => {
  render(<BalanceBox {...props} />);
  const balanceboxElement = screen.getByTestId('test-balancebox-id');
  expect(balanceboxElement).toBeOnTheScreen();
  const balanceboxLabelElement =
    within(balanceboxElement).getByTestId('balancebox-label');
  expect(balanceboxLabelElement).toBeOnTheScreen();
  expect(balanceboxLabelElement).toBe('Your main balance');
});
