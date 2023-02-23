import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import Link, {LinkProps} from './Link';

const handlePress = jest.fn();
const props: LinkProps = {
  children: 'test link',
  onPress: handlePress,
  testId: 'test-link-id',
};

const modifiedProps: LinkProps = {
  ...props,
  bold: true,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<Link {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render matching link with text', () => {
  render(<Link {...props} />);
  const linkElement = screen.getByTestId('test-link-id');
  expect(linkElement).toBeOnTheScreen();
  expect(linkElement).toHaveTextContent('test link');
});

test('should handle onPress event', () => {
  render(<Link {...props} />);
  const linkElement = screen.getByTestId('test-link-id');
  fireEvent.press(linkElement);
  expect(handlePress).toHaveBeenCalledTimes(1);
});

test('should render link with modified style through props', () => {
  render(<Link {...modifiedProps} />);
  const linkElement = screen.getByTestId('test-link-id');
  expect(linkElement).toBeOnTheScreen();
  const textElement = screen.getByText('test link');
  expect(textElement).toBeOnTheScreen();
  expect(textElement).toHaveStyle({textDecorationLine: 'underline'});
});
