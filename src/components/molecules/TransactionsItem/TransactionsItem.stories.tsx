import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {TransactionsItem} from 'components/molecules';

export default {
  title: 'Molecules/TransactionsItem',
  component: TransactionsItem,
} as ComponentMeta<typeof TransactionsItem>;
const Template: ComponentStory<typeof TransactionsItem> = args => (
  <TransactionsItem {...args} />
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
