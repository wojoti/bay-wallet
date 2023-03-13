import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import ModalContainer, {ModalContainerProps} from './ModalContainer';

const mockOnPress = jest.fn();
const props: ModalContainerProps = {
  testId: 'test-modalcontainer-id',
  header: 'Header',
  description: 'Modal description',
  buttonText: 'Button text',
  onPress: mockOnPress,
};
test('should match snapshot', () => {
  const tree = TestRenderer.create(<ModalContainer {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render ModalContainer', () => {
  render(<ModalContainer {...props} />);
  const ModalContainerElement = screen.getByTestId('test-modalcontainer-id');
  expect(ModalContainerElement).toBeOnTheScreen();
});
test('should render ModalContainer - header', () => {
  render(<ModalContainer {...props} />);
  const ModalContainerElement = screen.getByTestId('test-modalcontainer-id');
  expect(ModalContainerElement).toBeOnTheScreen();
  const headerElement = within(ModalContainerElement).getByTestId(
    'modalcontainer-header',
  );
  expect(headerElement).toBeOnTheScreen();
  expect(headerElement).toHaveTextContent('Header');
});
test('should render ModalContainer - label', () => {
  render(<ModalContainer {...props} />);
  const ModalContainerElement = screen.getByTestId('test-modalcontainer-id');
  expect(ModalContainerElement).toBeOnTheScreen();
  const labelElement = within(ModalContainerElement).getByTestId(
    'modalcontainer-label',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('Modal description');
});
test('should render ModalContainer - img', () => {
  render(<ModalContainer {...props} />);
  const ModalContainerElement = screen.getByTestId('test-modalcontainer-id');
  expect(ModalContainerElement).toBeOnTheScreen();
  const imgElement = within(ModalContainerElement).getByTestId(
    'modalcontainer-img',
  );
  expect(imgElement).toBeOnTheScreen();
});
test('should render ModalContainer - button', () => {
  render(<ModalContainer {...props} />);
  const ModalContainerElement = screen.getByTestId('test-modalcontainer-id');
  expect(ModalContainerElement).toBeOnTheScreen();
  const btnElement = within(ModalContainerElement).getByTestId(
    'modalcontainer-button',
  );
  expect(btnElement).toBeOnTheScreen();
  const textElement = within(btnElement).getByTestId('button-text');
  expect(textElement).toBeOnTheScreen();
  expect(textElement).toHaveTextContent('Button text');
});

test('should render ModalContainer - button - handle onPress', () => {
  render(<ModalContainer {...props} />);
  const ModalContainerElement = screen.getByTestId('test-modalcontainer-id');
  expect(ModalContainerElement).toBeOnTheScreen();
  const btnElement = within(ModalContainerElement).getByTestId(
    'modalcontainer-button',
  );
  expect(btnElement).toBeOnTheScreen();
  expect(mockOnPress).toBeCalledTimes(0);
  fireEvent.press(btnElement);
  expect(mockOnPress).toBeCalledTimes(1);
});
