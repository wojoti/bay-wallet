import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import MarketItemSeparator, {
  MarketItemSeparatorProps,
} from './MarketItemSeparator';

const props: MarketItemSeparatorProps = {
  testId: 'test-marketitemseparator-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<MarketItemSeparator {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render MarketItemSeparator', () => {
  render(<MarketItemSeparator {...props} />);
  const MarketItemSeparatorElement = screen.getByTestId(
    'test-marketitemseparator-id',
  );
  expect(MarketItemSeparatorElement).toBeOnTheScreen();
});
