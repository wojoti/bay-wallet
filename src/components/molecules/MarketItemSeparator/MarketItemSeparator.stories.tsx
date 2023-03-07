import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {MarketItemSeparator} from 'components/molecules';

export default {
  title: 'Molecules/MarketItemSeparator',
  component: MarketItemSeparator,
} as ComponentMeta<typeof MarketItemSeparator>;
const Template: ComponentStory<typeof MarketItemSeparator> = args => (
  <MarketItemSeparator {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
};
