import {ComponentMeta, ComponentStory} from '@storybook/react-native';

import TransactionsTemplate from './TransactionsTemplate';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/TransactionsTemplate',
  component: TransactionsTemplate,
} as ComponentMeta<typeof TransactionsTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TransactionsTemplate> = args => (
  <TransactionsTemplate {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
};
