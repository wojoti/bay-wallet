import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import {ReceiverData} from 'data/index';
import TestRenderer from 'react-test-renderer';
import {buttonGrey, primary} from 'theme/colors';
import TransferForm, {TransferFormProps} from './TransferForm';

const mockOnValuePress = jest.fn();
const mockOnReceiverPress = jest.fn();
const mockOnMorePress = jest.fn();
const mockOnSendPress = jest.fn();
const props: TransferFormProps = {
  testId: 'test-transferform-id',
  transferValue: '$ 50',
  selectedButton: 0,
  receiverData: ReceiverData,
  selectedReceiver: '1',
  description: 'Operation Amount',
  onValuePress: mockOnValuePress,
  onReceiverPress: mockOnReceiverPress,
  onMorePress: mockOnMorePress,
  onSendPress: mockOnSendPress,
};

const additionalProps: TransferFormProps = {
  ...props,
  selectedButton: 3,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<TransferForm {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render transferform', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
});

test('should render OperationValueSelector', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
});

test('should render OperationValueSelector - header', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const headerElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-header',
  );
  expect(headerElement).toBeOnTheScreen();
  expect(headerElement).toHaveTextContent('$ 50');
});

test('should render OperationValueSelector - label', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const labelElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-label',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('Operation Amount');
});

test('should render OperationValueSelector - button - 50', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-50',
  );
  expect(buttonElement).toBeOnTheScreen();
  const textElement = within(buttonElement).getByTestId('button-text');
  expect(textElement).toHaveTextContent('50');
});

test('should render OperationValueSelector - button - 100', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-100',
  );
  expect(buttonElement).toBeOnTheScreen();
  const textElement = within(buttonElement).getByTestId('button-text');
  expect(textElement).toHaveTextContent('100');
});

test('should render OperationValueSelector - button - 200', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-200',
  );
  expect(buttonElement).toBeOnTheScreen();
  const textElement = within(buttonElement).getByTestId('button-text');
  expect(textElement).toHaveTextContent('200');
});
test('should render OperationValueSelector - button - 400', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-400',
  );
  expect(buttonElement).toBeOnTheScreen();
  const textElement = within(buttonElement).getByTestId('button-text');
  expect(textElement).toHaveTextContent('400');
});
test('should render OperationValueSelector - button - 700', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-700',
  );
  expect(buttonElement).toBeOnTheScreen();
  const textElement = within(buttonElement).getByTestId('button-text');
  expect(textElement).toHaveTextContent('700');
});
test('should render OperationValueSelector - button - 1000', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-1000',
  );
  expect(buttonElement).toBeOnTheScreen();
  const textElement = within(buttonElement).getByTestId('button-text');
  expect(textElement).toHaveTextContent('1.000');
});

test('should render OperationValueSelector - button - 50 - handle onPress', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-50',
  );
  expect(buttonElement).toBeOnTheScreen();
  const textElement = within(buttonElement).getByTestId('button-text');
  expect(textElement).toHaveTextContent('50');
  fireEvent.press(buttonElement);
  expect(mockOnValuePress).toHaveBeenLastCalledWith('50', 0);

  expect(buttonElement).toHaveStyle({backgroundColor: primary});

  const headerElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-header',
  );
  expect(headerElement).toBeOnTheScreen();
  expect(headerElement).toHaveTextContent('$ 50');
});

test('should render OperationValueSelector - button - 100 - handle onPress', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-100',
  );
  expect(buttonElement).toBeOnTheScreen();
  const textElement = within(buttonElement).getByTestId('button-text');
  expect(textElement).toHaveTextContent('100');

  fireEvent.press(buttonElement);
  expect(mockOnValuePress).toHaveBeenLastCalledWith('100', 1);
});

test('should render OperationValueSelector - button - 200 - handle onPress', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-200',
  );
  expect(buttonElement).toBeOnTheScreen();
  const textElement = within(buttonElement).getByTestId('button-text');
  expect(textElement).toHaveTextContent('200');

  fireEvent.press(buttonElement);
  expect(mockOnValuePress).toHaveBeenLastCalledWith('200', 2);
});
test('should render OperationValueSelector - button - 400 - handle onPress', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-400',
  );
  expect(buttonElement).toBeOnTheScreen();
  const textElement = within(buttonElement).getByTestId('button-text');
  expect(textElement).toHaveTextContent('400');

  fireEvent.press(buttonElement);
  expect(mockOnValuePress).toHaveBeenLastCalledWith('400', 3);
});
test('should render OperationValueSelector - button - 700 - handle onPress', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-700',
  );
  expect(buttonElement).toBeOnTheScreen();
  const textElement = within(buttonElement).getByTestId('button-text');
  expect(textElement).toHaveTextContent('700');

  fireEvent.press(buttonElement);
  expect(mockOnValuePress).toHaveBeenLastCalledWith('700', 4);
});
test('should render OperationValueSelector - button - 1000 - handle onPress', () => {
  render(<TransferForm {...props} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-1000',
  );
  expect(buttonElement).toBeOnTheScreen();
  const textElement = within(buttonElement).getByTestId('button-text');
  expect(textElement).toHaveTextContent('1.000');

  fireEvent.press(buttonElement);
  expect(mockOnValuePress).toHaveBeenLastCalledWith('1.000', 5);
});

test('should render OperationValueSelector - werify selected button styling', () => {
  render(<TransferForm {...additionalProps} />);
  const transferformElement = screen.getByTestId('test-transferform-id');
  expect(transferformElement).toBeOnTheScreen();
  const OperationValueSelectorElement = within(transferformElement).getByTestId(
    'transferform-operationvalueselector',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  let buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-50',
  );
  expect(buttonElement).toBeOnTheScreen();
  expect(buttonElement).toHaveStyle({backgroundColor: buttonGrey});

  buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-100',
  );
  expect(buttonElement).toBeOnTheScreen();
  expect(buttonElement).toHaveStyle({backgroundColor: buttonGrey});

  buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-200',
  );
  expect(buttonElement).toBeOnTheScreen();
  expect(buttonElement).toHaveStyle({backgroundColor: buttonGrey});

  buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-400',
  );
  expect(buttonElement).toBeOnTheScreen();
  expect(buttonElement).toHaveStyle({backgroundColor: primary});

  buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-700',
  );
  expect(buttonElement).toBeOnTheScreen();
  expect(buttonElement).toHaveStyle({backgroundColor: buttonGrey});

  buttonElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-button-1000',
  );
  expect(buttonElement).toBeOnTheScreen();
  expect(buttonElement).toHaveStyle({backgroundColor: buttonGrey});
});
