import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {ComposableButton} from 'components/atoms';
import {Text} from 'react-native';
import {primary} from 'theme/colors';

export default {
  title: 'Atoms/ComposableButton',
  component: ComposableButton,
  argTypes: {
    onPress: {action: 'onPress'},
  },
} as ComponentMeta<typeof ComposableButton>;
const Template: ComponentStory<typeof ComposableButton> = args => (
  <ComposableButton {...args}>
    <Text>Added required component</Text>
  </ComposableButton>
);

export const Primary = Template.bind({});
Primary.args = {
  testId: '',
};

export const Secondary = Template.bind({});
Secondary.args = {
  testId: '',
  customStyle: {backgroundColor: primary, borderWidth: 0},
};
