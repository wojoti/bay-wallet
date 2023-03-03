import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import MarketHeader, {MarketHeaderProps} from './MarketHeader';

const handlePress = jest.fn();
const props: MarketHeaderProps = {
  onButtonPress: handlePress,
  header: 'header',
  buttonLabel: 'label',
  testId: 'test-marketheader-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<MarketHeader {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render marketheader', () => {
  render(<MarketHeader {...props} />);
  const marketheaderElement = screen.getByTestId('test-marketheader-id');
  expect(marketheaderElement).toBeOnTheScreen();
});

test('should render marketheader - header', () => {
  render(<MarketHeader {...props} />);
  const marketheaderElement = screen.getByTestId('test-marketheader-id');
  expect(marketheaderElement).toBeOnTheScreen();
  const marketheaderHeaderElement = within(marketheaderElement).getByTestId(
    'marketheader-header',
  );
  expect(marketheaderHeaderElement).toBeOnTheScreen();
  expect(marketheaderHeaderElement).toHaveTextContent('header');
});

test('should render marketheader - button', () => {
  render(<MarketHeader {...props} />);
  const marketheaderElement = screen.getByTestId('test-marketheader-id');
  expect(marketheaderElement).toBeOnTheScreen();
  const marketheaderButtonElement = within(marketheaderElement).getByTestId(
    'marketheader-button',
  );
  expect(marketheaderButtonElement).toBeOnTheScreen();
  const labelElement = within(marketheaderButtonElement).getByTestId(
    'button-text',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('label');
});

test('should render marketheader - button - onPress', () => {
  render(<MarketHeader {...props} />);
  const marketheaderElement = screen.getByTestId('test-marketheader-id');
  expect(marketheaderElement).toBeOnTheScreen();
  const marketheaderButtonElement = within(marketheaderElement).getByTestId(
    'marketheader-button',
  );
  expect(marketheaderButtonElement).toBeOnTheScreen();
  expect(handlePress).toBeCalledTimes(0);
  fireEvent.press(marketheaderButtonElement);
  expect(handlePress).toBeCalledTimes(1);
});
