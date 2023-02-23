import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import Breakline, {BreaklineProps} from './Breakline';

const props: BreaklineProps = {
  children: 'test breakline',
  testId: 'test-breakline-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<Breakline {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render breakline', () => {
  render(<Breakline {...props} />);
  const breaklineElement = screen.getByTestId('test-breakline-id');
  expect(breaklineElement).toBeOnTheScreen();
});

test('should render breakline with text', () => {
  render(<Breakline {...props} />);
  const breaklineElement = screen.getByTestId('test-breakline-id');
  expect(breaklineElement).toBeOnTheScreen();
  const breaklineTextElement = screen.getByTestId('breakline-text');
  expect(breaklineTextElement).toBeOnTheScreen();
  expect(breaklineTextElement).toHaveTextContent('test breakline');
});
