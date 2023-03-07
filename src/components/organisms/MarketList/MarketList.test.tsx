import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import {MarketData} from 'data/index';
import TestRenderer from 'react-test-renderer';
import MarketList, {MarketListProps} from './MarketList';

const mockOnViewMorePress = jest.fn();
const props: MarketListProps = {
  onViewMorePress: mockOnViewMorePress,
  testId: 'test-marketlist-id',
  data: MarketData,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<MarketList {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render marketlist', () => {
  render(<MarketList {...props} />);
  const marketlistElement = screen.getByTestId('test-marketlist-id');
  expect(marketlistElement).toBeOnTheScreen();
});

test('should render marketlist - flatlist', () => {
  render(<MarketList {...props} />);
  const marketlistElement = screen.getByTestId('test-marketlist-id');
  expect(marketlistElement).toBeOnTheScreen();
  const flatlistElement = within(marketlistElement).getByTestId(
    'marketlist-flatlist',
  );
  expect(flatlistElement).toBeOnTheScreen();
});

test('should render marketlist - marketheader', () => {
  render(<MarketList {...props} />);
  const marketlistElement = screen.getByTestId('test-marketlist-id');
  expect(marketlistElement).toBeOnTheScreen();
  const marketheaderElement = within(marketlistElement).getByTestId(
    'marketlist-marketheader',
  );
  expect(marketheaderElement).toBeOnTheScreen();
});

test('should render marketlist - marketheader - header', () => {
  render(<MarketList {...props} />);
  const marketlistElement = screen.getByTestId('test-marketlist-id');
  expect(marketlistElement).toBeOnTheScreen();
  const marketheaderElement = within(marketlistElement).getByTestId(
    'marketlist-marketheader',
  );
  expect(marketheaderElement).toBeOnTheScreen();
  const marketheaderHeaderElement = within(marketheaderElement).getByTestId(
    'marketheader-header',
  );
  expect(marketheaderHeaderElement).toBeOnTheScreen();
  expect(marketheaderHeaderElement).toHaveTextContent('Latest Market');
});

test('should render marketlist - marketheader - button', () => {
  render(<MarketList {...props} />);
  const marketlistElement = screen.getByTestId('test-marketlist-id');
  expect(marketlistElement).toBeOnTheScreen();
  const marketheaderElement = within(marketlistElement).getByTestId(
    'marketlist-marketheader',
  );
  expect(marketheaderElement).toBeOnTheScreen();
  const marketheaderButtonElement = within(marketheaderElement).getByTestId(
    'marketheader-button',
  );
  expect(marketheaderButtonElement).toBeOnTheScreen();
  const labelElement = within(marketheaderButtonElement).getByTestId(
    'button-text',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('View more');
});

test('should render marketlist - marketheader - button - onPress', () => {
  render(<MarketList {...props} />);
  const marketlistElement = screen.getByTestId('test-marketlist-id');
  expect(marketlistElement).toBeOnTheScreen();
  const marketheaderElement = within(marketlistElement).getByTestId(
    'marketlist-marketheader',
  );
  expect(marketheaderElement).toBeOnTheScreen();
  const marketheaderButtonElement = within(marketheaderElement).getByTestId(
    'marketheader-button',
  );
  expect(marketheaderButtonElement).toBeOnTheScreen();
  expect(mockOnViewMorePress).toBeCalledTimes(0);
  fireEvent.press(marketheaderButtonElement);
  expect(mockOnViewMorePress).toBeCalledTimes(1);
});
