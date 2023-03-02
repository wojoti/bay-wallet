import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import InputArea from './InputArea';

export default {
  title: 'Molecules/InputArea',
  component: InputArea,
  argTypes: {onChange: {action: 'onChange'}},
} as ComponentMeta<typeof InputArea>;
const Template: ComponentStory<typeof InputArea> = args => (
  <InputArea {...args} />
);

export const Username = Template.bind({});
Username.args = {label: 'username', testId: ''};

export const Password = Template.bind({});
Password.args = {label: 'password', testId: ''};
