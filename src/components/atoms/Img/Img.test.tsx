import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import {Img, ImgType} from '..';
import {ImgProps} from './Img';

const props: ImgProps = {
  src: ImgType.cardLock,
  width: 100,
  height: 100,
  alt: 'alt-text',
  testId: 'test-img-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<Img {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render Img', () => {
  render(<Img {...props} />);
  const ImgElement = screen.getByTestId('test-img-id');
  expect(ImgElement).toBeOnTheScreen();
});
