import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import Background, {BackgroundProps} from './Background';

const props: BackgroundProps = {
  testId: 'test-background-id',
  source: require('img/wave.png'),
};

const modifiedProps: BackgroundProps = {
  ...props,
  customStyle: {width: '100%'},
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<Background {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render Background', () => {
  render(<Background {...props} />);
  const BackgroundElement = screen.getByTestId('test-background-id');
  expect(BackgroundElement).toBeOnTheScreen();
});

test('should render background with modified style through props', () => {
  render(<Background {...modifiedProps} />);
  const backgroundElement = screen.getByTestId('test-background-id');
  expect(backgroundElement).toBeOnTheScreen();
  expect(backgroundElement).toHaveStyle({width: '100%'});
});
