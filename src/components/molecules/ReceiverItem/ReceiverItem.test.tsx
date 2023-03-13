import '@testing-library/jest-native/extend-expect';
import {render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import {buttonGrey, primary} from 'theme/colors';
import ReceiverItem, {ReceiverItemProps} from './ReceiverItem';

const mockOnPress = jest.fn();
const props: ReceiverItemProps = {
  testId: 'test-receiveritem-id',
  id: '0',
  firstname: 'First Name',
  selectedId: '1',
  onPress: mockOnPress,
};
const additionalProps: ReceiverItemProps = {
  ...props,
  selectedId: '0',
};
test('should match snapshot', () => {
  const tree = TestRenderer.create(<ReceiverItem {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render ReceiverItem', () => {
  render(<ReceiverItem {...props} />);
  const ReceiverItemElement = screen.getByTestId('test-receiveritem-id');
  expect(ReceiverItemElement).toBeOnTheScreen();
});

test('should render ReceiverItem - button', () => {
  render(<ReceiverItem {...props} />);
  const ReceiverItemElement = screen.getByTestId('test-receiveritem-id');
  expect(ReceiverItemElement).toBeOnTheScreen();
  const btnElement = within(ReceiverItemElement).getByTestId(
    'receiveritem-button',
  );
  expect(btnElement).toBeOnTheScreen();
});

test('should render ReceiverItem - button - style', () => {
  render(<ReceiverItem {...props} />);
  const ReceiverItemElement = screen.getByTestId('test-receiveritem-id');
  expect(ReceiverItemElement).toBeOnTheScreen();
  const btnElement = within(ReceiverItemElement).getByTestId(
    'receiveritem-button',
  );
  expect(btnElement).toBeOnTheScreen();
  expect(btnElement).toHaveStyle({backgroundColor: buttonGrey});
});
test('should render ReceiverItem - button - pressed style', () => {
  render(<ReceiverItem {...additionalProps} />);
  const ReceiverItemElement = screen.getByTestId('test-receiveritem-id');
  expect(ReceiverItemElement).toBeOnTheScreen();
  const btnElement = within(ReceiverItemElement).getByTestId(
    'receiveritem-button',
  );
  expect(btnElement).toBeOnTheScreen();
  expect(btnElement).toHaveStyle({backgroundColor: primary});
});

test('should render ReceiverItem - button - img', () => {
  render(<ReceiverItem {...props} />);
  const ReceiverItemElement = screen.getByTestId('test-receiveritem-id');
  expect(ReceiverItemElement).toBeOnTheScreen();
  const btnElement = within(ReceiverItemElement).getByTestId(
    'receiveritem-button',
  );
  expect(btnElement).toBeOnTheScreen();
  const imgElement = within(btnElement).getByTestId('receiveritem-img');
  expect(imgElement).toBeOnTheScreen();
});

test('should render ReceiverItem - label', () => {
  render(<ReceiverItem {...props} />);
  const ReceiverItemElement = screen.getByTestId('test-receiveritem-id');
  expect(ReceiverItemElement).toBeOnTheScreen();
  const labelElement =
    within(ReceiverItemElement).getByTestId('receiveritem-label');
  expect(labelElement).toBeOnTheScreen();
});
