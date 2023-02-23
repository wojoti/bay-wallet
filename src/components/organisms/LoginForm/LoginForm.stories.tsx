import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import LoginForm from './LoginForm';

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  argTypes: {onLoginSubmit: {action: 'onLoginSubmit'}},
} as ComponentMeta<typeof LoginForm>;
const Template: ComponentStory<typeof LoginForm> = args => (
  <LoginForm {...args} />
);

export const Username = Template.bind({});
Username.args = {testId: ''};

export const Password = Template.bind({});
Password.args = {testId: ''};
