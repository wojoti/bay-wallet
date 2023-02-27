import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {TransferAndWithdraw} from 'components/molecules';

export default {
  title: 'Molecules/TransferAndWithdraw',
  component: TransferAndWithdraw,
  argTypes: {
    onTransferPress: {action: 'onTransferPress'},
    onWithdrawPress: {action: 'onWithdrawPress'},
  },
} as ComponentMeta<typeof TransferAndWithdraw>;
const Template: ComponentStory<typeof TransferAndWithdraw> = args => (
  <TransferAndWithdraw {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
};
