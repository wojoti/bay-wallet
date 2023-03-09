import '@testing-library/jest-native/extend-expect';
import {render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import BankCard, {BankCardProps} from './BankCard';

const props: BankCardProps = {
  cardTheme: 'green',
  name: 'name',
  value: 'value',
  cardNumber: '123456789123',
  testId: 'test-bankcard-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<BankCard {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render BankCard', () => {
  render(<BankCard {...props} />);
  const BankCardElement = screen.getByTestId('test-bankcard-id');
  expect(BankCardElement).toBeOnTheScreen();
});

test('should render BankCard - name', () => {
  render(<BankCard {...props} />);
  const BankCardElement = screen.getByTestId('test-bankcard-id');
  expect(BankCardElement).toBeOnTheScreen();
  const labelElement = within(BankCardElement).getByTestId('bankcard-name');
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('name');
});

test('should render BankCard - value', () => {
  render(<BankCard {...props} />);
  const BankCardElement = screen.getByTestId('test-bankcard-id');
  expect(BankCardElement).toBeOnTheScreen();
  const headerElement = within(BankCardElement).getByTestId('bankcard-value');
  expect(headerElement).toBeOnTheScreen();
  expect(headerElement).toHaveTextContent('value');
});

test('should render BankCard - modified card number', () => {
  render(<BankCard {...props} />);
  const BankCardElement = screen.getByTestId('test-bankcard-id');
  expect(BankCardElement).toBeOnTheScreen();
  const headerElement = within(BankCardElement).getByTestId(
    'bankcard-cardnumber',
  );
  expect(headerElement).toBeOnTheScreen();
  expect(headerElement).toHaveTextContent('123 456 789 ***');
});
