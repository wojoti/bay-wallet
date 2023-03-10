import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import {buttonGrey, primary} from 'theme/colors';
import OperationValueSelector, {
  OperationValueSelectorProps,
} from './OperationValueSelector';

let value = '$ 50';
let id = 0;
const mockOnValuePress = jest.fn((fnValue, fnId) => {
  value = '$ ' + fnValue;
  id = fnId;
});
const props: OperationValueSelectorProps = {
  testId: 'test-operationvalueselector-id',
  value: value,
  onValuePress: mockOnValuePress,
  description: 'Operation Amount',
  selectedButton: id,
};

const additionalProps: OperationValueSelectorProps = {
  ...props,
  selectedButton: 3,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(
    <OperationValueSelector {...props} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render OperationValueSelector', () => {
  render(<OperationValueSelector {...props} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
});

test('should render OperationValueSelector - header', () => {
  render(<OperationValueSelector {...props} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const headerElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-header',
  );
  expect(headerElement).toBeOnTheScreen();
  expect(headerElement).toHaveTextContent('$ 50');
});

test('should render OperationValueSelector - label', () => {
  render(<OperationValueSelector {...props} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
  );
  expect(OperationValueSelectorElement).toBeOnTheScreen();
  const labelElement = within(OperationValueSelectorElement).getByTestId(
    'operationvalueselector-label',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('Operation Amount');
});

test('should render OperationValueSelector - button - 50', () => {
  render(<OperationValueSelector {...props} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
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
  render(<OperationValueSelector {...props} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
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
  render(<OperationValueSelector {...props} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
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
  render(<OperationValueSelector {...props} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
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
  render(<OperationValueSelector {...props} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
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
  render(<OperationValueSelector {...props} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
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
  render(<OperationValueSelector {...props} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
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
  render(<OperationValueSelector {...props} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
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
  render(<OperationValueSelector {...props} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
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
  render(<OperationValueSelector {...props} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
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
  render(<OperationValueSelector {...props} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
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
  render(<OperationValueSelector {...props} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
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
  render(<OperationValueSelector {...additionalProps} />);
  const OperationValueSelectorElement = screen.getByTestId(
    'test-operationvalueselector-id',
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
