import {ComponentMeta, ComponentStory} from '@storybook/react-native';

import MarketList from './MarketList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/MarketList',
  component: MarketList,
  argTypes: {
    onViewMorePress: {action: 'onViewMorePress'},
  },
} as ComponentMeta<typeof MarketList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MarketList> = args => (
  <MarketList {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
};
