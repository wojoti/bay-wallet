import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {MarketItem} from 'components/molecules';

export default {
  title: 'Molecules/MarketItem',
  component: MarketItem,
} as ComponentMeta<typeof MarketItem>;
const Template: ComponentStory<typeof MarketItem> = args => (
  <MarketItem {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
  value: '0.02137',
  name: 'Bitcoin',
  percent: '4',
};
