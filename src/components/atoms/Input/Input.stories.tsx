import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {Input} from 'components/atoms';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {onChange: {action: 'onChange'}},
} as ComponentMeta<typeof Input>;
const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Username = Template.bind({});
Username.args = {type: 'username', testId: ''};

export const Password = Template.bind({});
Password.args = {type: 'password', testId: ''};
