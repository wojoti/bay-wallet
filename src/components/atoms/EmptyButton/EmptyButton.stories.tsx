import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {EmptyButton} from 'components/atoms';
import {Text} from 'react-native';
import {primary} from 'theme/colors';

export default {
  title: 'Atoms/EmptyButton',
  component: EmptyButton,
  argTypes: {
    onPress: {action: 'onPress'},
    color: {
      control: {type: 'color'},
    },
    borderColor: {
      control: {type: 'color'},
    },
  },
} as ComponentMeta<typeof EmptyButton>;
const Template: ComponentStory<typeof EmptyButton> = args => (
  <EmptyButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  testId: '',
  height: 65,
  borderRadius: 8,
  borderColor: primary,
  color: primary,
  children: <Text>Added required component</Text>,
};

export const Secondary = Template.bind({});
Secondary.args = {
  testId: '',
  height: 65,
  borderRadius: 8,
  borderColor: primary,
  color: 'white',
  children: <Text>Added required component</Text>,
};
