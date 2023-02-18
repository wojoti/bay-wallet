import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import Header, {HeaderProps} from './Header';

const props: HeaderProps = {
  testId: 'test-header-id',
};

const modifiedProps: HeaderProps = {
  ...props,
  color: 'red',
  size: 100,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(
    <Header {...props}>test header</Header>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render header', () => {
  render(<Header {...props}>test header</Header>);
  const headerElement = screen.getByTestId('test-header-id');
  expect(headerElement).toBeOnTheScreen();
});

test('should render header with text', () => {
  render(<Header {...props}>test header</Header>);
  const headerElement = screen.getByTestId('test-header-id');
  expect(headerElement).toBeOnTheScreen();
  expect(headerElement).toHaveTextContent('test header');
});

test('should render header with modified style through props', () => {
  render(<Header {...modifiedProps} />);
  const headerElement = screen.getByTestId('test-header-id');
  expect(headerElement).toBeOnTheScreen();
  expect(headerElement).toHaveStyle({
    color: 'red',
    fontSize: 100,
  });
});
