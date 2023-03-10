import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import SelectedWalletArea, {
  SelectedWalletAreaProps,
} from './SelectedWalletArea';

const mockOnChangePress = jest.fn();
const props: SelectedWalletAreaProps = {
  testId: 'test-selectedwalletarea-id',
  walletValue: '$ 1.000',
  walletName: 'Example Wallet',
  onChangePress: mockOnChangePress,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<SelectedWalletArea {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render SelectedWalletArea', () => {
  render(<SelectedWalletArea {...props} />);
  const SelectedWalletAreaElement = screen.getByTestId(
    'test-selectedwalletarea-id',
  );
  expect(SelectedWalletAreaElement).toBeOnTheScreen();
});

test('should render SelectedWalletArea - header with value', () => {
  render(<SelectedWalletArea {...props} />);
  const SelectedWalletAreaElement = screen.getByTestId(
    'test-selectedwalletarea-id',
  );
  expect(SelectedWalletAreaElement).toBeOnTheScreen();
  const headerElement = within(SelectedWalletAreaElement).getByTestId(
    'selectedwalletarea-header',
  );
  expect(headerElement).toBeOnTheScreen();
  expect(headerElement).toHaveTextContent('$ 1.000');
});

test('should render SelectedWalletArea - label with name', () => {
  render(<SelectedWalletArea {...props} />);
  const SelectedWalletAreaElement = screen.getByTestId(
    'test-selectedwalletarea-id',
  );
  expect(SelectedWalletAreaElement).toBeOnTheScreen();
  const labelElement = within(SelectedWalletAreaElement).getByTestId(
    'selectedwalletarea-label',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('Example Wallet');
});

test('should render SelectedWalletArea - button', () => {
  render(<SelectedWalletArea {...props} />);
  const SelectedWalletAreaElement = screen.getByTestId(
    'test-selectedwalletarea-id',
  );
  expect(SelectedWalletAreaElement).toBeOnTheScreen();
  const buttonElement = within(SelectedWalletAreaElement).getByTestId(
    'selectedwalletarea-button',
  );
  expect(buttonElement).toBeOnTheScreen();
});

test('should render SelectedWalletArea - handle onChangePress', () => {
  render(<SelectedWalletArea {...props} />);
  const SelectedWalletAreaElement = screen.getByTestId(
    'test-selectedwalletarea-id',
  );
  expect(SelectedWalletAreaElement).toBeOnTheScreen();
  const buttonElement = within(SelectedWalletAreaElement).getByTestId(
    'selectedwalletarea-button',
  );
  expect(buttonElement).toBeOnTheScreen();
  expect(mockOnChangePress).toBeCalledTimes(0);
  fireEvent.press(buttonElement);
  expect(mockOnChangePress).toBeCalledTimes(1);
});
