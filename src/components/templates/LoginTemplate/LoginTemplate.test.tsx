import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import LoginTemplate, {LoginTemplateProps} from './LoginTemplate';

const mockOnLoginSubmit = jest.fn<
  LoginTemplateProps['onLoginSubmit'],
  [email: string, password: string]
>();
const handleResetPress = jest.fn();
const handleSocialLoginPress = jest.fn<
  LoginTemplateProps['onPasswordReset'],
  [icon: string]
>();
const props: LoginTemplateProps = {
  onLoginSubmit: mockOnLoginSubmit,
  onPasswordReset: handleResetPress,
  onSocialLoginPress: handleSocialLoginPress,
  testId: 'test-logintemplate-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<LoginTemplate {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render logintemplate', () => {
  render(<LoginTemplate {...props} />);
  const logintemplateElement = screen.getByTestId('test-logintemplate-id');
  expect(logintemplateElement).toBeOnTheScreen();
});
