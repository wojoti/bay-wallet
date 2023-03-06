import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {TransactionItem} from 'components/molecules';

export default {
  title: 'Molecules/TransactionItem',
  component: TransactionItem,
} as ComponentMeta<typeof TransactionItem>;
const Template: ComponentStory<typeof TransactionItem> = args => (
  <TransactionItem {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
  expense: true,
  category: 'Withdraw',
  clientname: 'ATM',
  value: '-$1,000',
  date: '3d ago',
};
