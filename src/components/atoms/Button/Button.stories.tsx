import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {Button} from 'components/atoms';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    onPress: {action: 'onPress'},
    type: {
      control: {type: 'select'},
      options: ['primary', 'white', 'simple', 'alt', 'disabled', 'action'],
    },
  },
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'LOGIN',
  testId: '',
  type: 'primary',
};

export const Alternative = Template.bind({});
Alternative.args = {
  children: 'LOGIN',
  testId: '',
  type: 'alt',
};
