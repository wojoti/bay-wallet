import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
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
