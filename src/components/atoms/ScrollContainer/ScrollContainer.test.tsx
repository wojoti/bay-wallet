import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import ScrollContainer, {ScrollContainerProps} from './ScrollContainer';

const props: ScrollContainerProps = {
  testId: 'test-scrollcontainer-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<ScrollContainer {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render ScrollContainer', () => {
  render(<ScrollContainer {...props} />);
  const ScrollContainerElement = screen.getByTestId('test-scrollcontainer-id');
  expect(ScrollContainerElement).toBeOnTheScreen();
});
