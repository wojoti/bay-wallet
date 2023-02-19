import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import Container, {ContainerProps} from './Container';

const props: ContainerProps = {
  testId: 'test-container-id',
};

const modifiedProps: ContainerProps = {
  ...props,
  mt: 14,
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

test('should render container with default style', () => {
  render(<Container {...props} />);
  const containerElement = screen.getByTestId('test-container-id');
  expect(containerElement).toBeOnTheScreen();
  expect(containerElement).toHaveStyle({
    marginTop: 0,
  });
});

test('should render container with modified style through props', () => {
  render(<Container {...modifiedProps} />);
  const containerElement = screen.getByTestId('test-container-id');
  expect(containerElement).toBeOnTheScreen();
  expect(containerElement).toHaveStyle({marginTop: 14});
});
