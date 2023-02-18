import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import Container, {ContainerProps} from './Container';

const props: ContainerProps = {
  testId: 'test-container-id',
  background: 'primary',
};

const modifiedProps: ContainerProps = {
  ...props,
  background: 'secondary',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<Container {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render Container', () => {
  render(<Container {...props} />);
  const ContainerElement = screen.getByTestId('test-container-id');
  expect(ContainerElement).toBeOnTheScreen();
});

test('should render Container with default style', () => {
  render(<Container {...props} />);
  const ContainerElement = screen.getByTestId('test-container-id');
  expect(ContainerElement).toBeOnTheScreen();
  expect(ContainerElement).toHaveStyle({
    backgroundColor: '#363062',
  });
});

test('should render Container with modified style through props', () => {
  render(<Container {...modifiedProps} />);
  const ContainerElement = screen.getByTestId('test-container-id');
  expect(ContainerElement).toBeOnTheScreen();
  expect(ContainerElement).toHaveStyle({backgroundColor: 'white'});
});
