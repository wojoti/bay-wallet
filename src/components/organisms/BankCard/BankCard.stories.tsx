import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import BankCard from './BankCard';

export default {
  title: 'Organisms/BankCard',
  component: BankCard,
} as ComponentMeta<typeof BankCard>;
const Template: ComponentStory<typeof BankCard> = args => (
  <BankCard {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
  cardTheme: 'purple',
  name: 'Card name',
  value: '$21,37',
  cardNumber: '123456789',
};
