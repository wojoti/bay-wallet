import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {ModalContainer} from 'components/molecules';

export default {
  title: 'Molecules/ModalContainer',
  component: ModalContainer,
  argTypes: {
    onPress: {action: 'onPress'},
  },
} as ComponentMeta<typeof ModalContainer>;
const Template: ComponentStory<typeof ModalContainer> = args => (
  <ModalContainer {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
  header: 'Header',
  description: 'Modal description',
  buttonText: 'Button text',
};
