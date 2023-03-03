import '@testing-library/jest-native/extend-expect';
import {render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import MarketItem, {MarketItemProps} from './MarketItem';

const props: MarketItemProps = {
  testId: 'test-marketitem-id',
  value: '1234',
  name: 'name',
  percent: '4',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<MarketItem {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render MarketItem', () => {
  render(<MarketItem {...props} />);
  const MarketItemElement = screen.getByTestId('test-marketitem-id');
  expect(MarketItemElement).toBeOnTheScreen();
});

test('should render MarketItem - logo', () => {
  render(<MarketItem {...props} />);
  const MarketItemElement = screen.getByTestId('test-marketitem-id');
  expect(MarketItemElement).toBeOnTheScreen();
  const MarketItemImgElement =
    within(MarketItemElement).getByTestId('marketitem-img');
  expect(MarketItemImgElement).toBeOnTheScreen();
});

test('should render MarketItem - value', () => {
  render(<MarketItem {...props} />);
  const MarketItemElement = screen.getByTestId('test-marketitem-id');
  expect(MarketItemElement).toBeOnTheScreen();
  const MarketItemHeaderElement =
    within(MarketItemElement).getByTestId('marketitem-value');
  expect(MarketItemHeaderElement).toBeOnTheScreen();
  expect(MarketItemHeaderElement).toHaveTextContent('$ 1234');
});

test('should render MarketItem - name', () => {
  render(<MarketItem {...props} />);
  const MarketItemElement = screen.getByTestId('test-marketitem-id');
  expect(MarketItemElement).toBeOnTheScreen();
  const MarketItemLabelElement =
    within(MarketItemElement).getByTestId('marketitem-name');
  expect(MarketItemLabelElement).toBeOnTheScreen();
  expect(MarketItemLabelElement).toHaveTextContent('name');
});

test('should render MarketItem - percent', () => {
  render(<MarketItem {...props} />);
  const MarketItemElement = screen.getByTestId('test-marketitem-id');
  expect(MarketItemElement).toBeOnTheScreen();
  const MarketItemHeaderElement =
    within(MarketItemElement).getByTestId('marketitem-percent');
  expect(MarketItemHeaderElement).toBeOnTheScreen();
  expect(MarketItemHeaderElement).toHaveTextContent('4%');
});

test('should render MarketItem - dash up/down', () => {
  render(<MarketItem {...props} />);
  const MarketItemElement = screen.getByTestId('test-marketitem-id');
  expect(MarketItemElement).toBeOnTheScreen();
  const MarketItemHeaderElement =
    within(MarketItemElement).getByTestId('marketitem-dash');
  expect(MarketItemHeaderElement).toBeOnTheScreen();
});
