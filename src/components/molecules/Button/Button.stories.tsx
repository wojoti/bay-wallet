import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {Button} from 'components/molecules';
import {primary} from 'theme/colors';

export default {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    onPress: {action: 'onPress'},
    color: {
      control: {type: 'color'},
    },
    borderColor: {
      control: {type: 'color'},
    },
    fontColor: {
      control: {type: 'color'},
    },
  },
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary button',
  testId: '',
  height: 65,
  borderRadius: 8,
  borderColor: primary,
  color: primary,
  fontColor: 'white',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary button',
  testId: '',
  height: 65,
  borderRadius: 8,
  borderColor: primary,
  color: 'white',
  fontColor: primary,
};
