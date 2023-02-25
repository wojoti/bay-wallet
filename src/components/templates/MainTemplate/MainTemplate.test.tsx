import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import MainTemplate, {MainTemplateProps} from './MainTemplate';

const props: MainTemplateProps = {
  testId: 'test-maintemplate-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<MainTemplate {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render maintemplate', () => {
  render(<MainTemplate {...props} />);
  const maintemplateElement = screen.getByTestId('test-maintemplate-id');
  expect(maintemplateElement).toBeOnTheScreen();
});
