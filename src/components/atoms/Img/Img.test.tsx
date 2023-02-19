import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import {Img, ImgType} from '..';
import {ImgProps} from './Img';

const props: ImgProps = {
  src: ImgType.cardLock,
  height: 100,
  alt: 'alt-text',
  testId: 'test-img-id',
};

const altProps: ImgProps = {
  ...props,
  src: ImgType.logo,
  height: '100%',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<Img {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render Img with integer width and height', () => {
  render(<Img {...props} />);
  const ImgElement = screen.getByTestId('test-img-id');
  expect(ImgElement).toBeOnTheScreen();
});

test('should render Img with percent width and height', () => {
  render(<Img {...altProps} />);
  const ImgElement = screen.getByTestId('test-img-id');
  expect(ImgElement).toBeOnTheScreen();
});
