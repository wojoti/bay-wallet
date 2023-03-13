import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {ReceiverItem} from 'components/molecules';

export default {
  title: 'Molecules/ReceiverItem',
  component: ReceiverItem,
  argTypes: {
    onPress: {action: 'onPress'},
  },
} as ComponentMeta<typeof ReceiverItem>;
const Template: ComponentStory<typeof ReceiverItem> = args => (
  <ReceiverItem {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
  id: '0',
  firstname: 'First Name',
  selectedId: '1',
};

export const Selected = Template.bind({});
Selected.args = {
  testId: '',
  id: '0',
  firstname: 'First Name',
  selectedId: '0',
};
