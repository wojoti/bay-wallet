import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
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
