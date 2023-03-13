import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {ReceiverData} from 'data/index';
import TransferForm from './TransferForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/TransferForm',
  component: TransferForm,
  argTypes: {
    onValuePress: {action: 'onValuePress'},
    onReceiverPress: {action: 'onReceiverPress'},
    onMorePress: {action: 'onMorePress'},
    onSendPress: {action: 'onSendPress'},
  },
} as ComponentMeta<typeof TransferForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TransferForm> = args => (
  <TransferForm {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
  transferValue: '$ 50',
  selectedButton: 0,
  receiverData: ReceiverData,
  selectedReceiver: '1',
  description: 'Example amount',
};
