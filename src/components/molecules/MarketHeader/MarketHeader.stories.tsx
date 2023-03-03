import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import MarketHeader from './MarketHeader';

export default {
  title: 'Molecules/MarketHeader',
  component: MarketHeader,
  argTypes: {onButtonPress: {action: 'onButtonPress'}},
} as ComponentMeta<typeof MarketHeader>;
const Template: ComponentStory<typeof MarketHeader> = args => (
  <MarketHeader {...args} />
);

export const Example = Template.bind({});
Example.args = {header: 'Latest Market', buttonLabel: 'View more', testId: ''};
