import {ComponentMeta, ComponentStory} from '@storybook/react-native';

import BalanceBox from './BalanceBox';

export default {
  title: 'Molecules/BalanceBox',
  component: BalanceBox,
  argTypes: {onDetailsPress: {action: 'onDetailsPress'}},
} as ComponentMeta<typeof BalanceBox>;

const Template: ComponentStory<typeof BalanceBox> = args => (
  <BalanceBox {...args} />
);

export const Example = Template.bind({});
Example.args = {
  amount: '45.500,12',
  testId: '',
};
