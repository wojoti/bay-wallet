import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import {MarketData} from 'data/index';
import TestRenderer from 'react-test-renderer';
import MainTemplate, {MainTemplateProps} from './MainTemplate';

const mockOnNotificationPress = jest.fn();
const mockOnUserProfilePress = jest.fn();
const mockOnDetailsPress = jest.fn();
const mockOnTransferPress = jest.fn();
const mockOnWithdrawPress = jest.fn();
const mockOnViewMorePress = jest.fn();
const props: MainTemplateProps = {
  onNotificationPress: mockOnNotificationPress,
  onUserProfilePress: mockOnUserProfilePress,
  onDetailsPress: mockOnDetailsPress,
  onTransferPress: mockOnTransferPress,
  onWithdrawPress: mockOnWithdrawPress,
  onViewMorePress: mockOnViewMorePress,
  testId: 'test-maintemplate-id',
  data: MarketData,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<MainTemplate {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render maintemplate', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
});
