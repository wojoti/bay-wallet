import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import LoginForm from './LoginForm';

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  argTypes: {
    onLoginSubmit: {action: 'onLoginSubmit'},
    onPasswordReset: {action: 'onPasswordReset'},
  },
} as ComponentMeta<typeof LoginForm>;
const Template: ComponentStory<typeof LoginForm> = args => (
  <LoginForm {...args} />
);

export const Example = Template.bind({});
Example.args = {testId: ''};
