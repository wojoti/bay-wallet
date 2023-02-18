import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import Column, {ColumnProps} from './Column';

const props: ColumnProps = {
  testId: 'test-column-id',
};

const modifiedProps: ColumnProps = {
  ...props,
  mt: 14,
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<Column {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render Column', () => {
  render(<Column {...props} />);
  const ColumnElement = screen.getByTestId('test-column-id');
  expect(ColumnElement).toBeOnTheScreen();
});

test('should render column with default style', () => {
  render(<Column {...props} />);
  const columnElement = screen.getByTestId('test-column-id');
  expect(columnElement).toBeOnTheScreen();
  expect(columnElement).toHaveStyle({
    marginTop: 0,
  });
});

test('should render column with modified style through props', () => {
  render(<Column {...modifiedProps} />);
  const columnElement = screen.getByTestId('test-column-id');
  expect(columnElement).toBeOnTheScreen();
  expect(columnElement).toHaveStyle({marginTop: 14});
});
