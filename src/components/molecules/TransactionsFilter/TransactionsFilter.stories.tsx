import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {TransactionsFilter} from 'components/molecules';

export default {
  title: 'Molecules/TransactionsFilter',
  component: TransactionsFilter,
  argTypes: {
    onFilterPress: {action: 'onFilterPress'},
  },
} as ComponentMeta<typeof TransactionsFilter>;
const Template: ComponentStory<typeof TransactionsFilter> = args => (
  <TransactionsFilter {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
  selectedId: 0,
};
