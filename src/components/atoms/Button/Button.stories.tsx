import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {Button} from 'components/atoms';
import {primary} from 'theme/colors';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    onPress: {action: 'onPress'},
  },
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default button',
  testId: '',
};

export const Custom = Template.bind({});
Custom.args = {
  children: 'Custom button',
  testId: '',
  customStyle: {backgroundColor: primary, borderWidth: 0},
  customFontStyle: {color: 'white'},
};
