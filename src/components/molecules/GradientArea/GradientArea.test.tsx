import '@testing-library/jest-native/extend-expect';
import {render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import GradientArea, {GradientAreaProps} from './GradientArea';

const props: GradientAreaProps = {
  testId: 'test-gradientarea-id',
  colors: ['green', 'lime'],
  start: {
    x: 0,
    y: 0,
  },
  end: {
    x: 1,
    y: 1,
  },
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<GradientArea {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render gradientarea', () => {
  render(<GradientArea {...props} />);
  const gradientareaElement = screen.getByTestId('test-gradientarea-id');
  expect(gradientareaElement).toBeOnTheScreen();
});

test('should render gradientarea - gradient', () => {
  render(<GradientArea {...props} />);
  const gradientareaElement = screen.getByTestId('test-gradientarea-id');
  expect(gradientareaElement).toBeOnTheScreen();
  const linearGradient = within(gradientareaElement).getByTestId(
    'gradientarea-gradient',
  );
  expect(linearGradient).toBeOnTheScreen();
});
