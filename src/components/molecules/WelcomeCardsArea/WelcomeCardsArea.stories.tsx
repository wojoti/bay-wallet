import {ComponentMeta, ComponentStory} from '@storybook/react-native';

import WelcomeCardsArea from './WelcomeCardsArea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'molecules/WelcomeCardsArea',
  component: WelcomeCardsArea,
  argTypes: {
    onButtonPress: {action: 'onButtonPress'},
  },
} as ComponentMeta<typeof WelcomeCardsArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WelcomeCardsArea> = args => (
  <WelcomeCardsArea {...args} />
);

export const Example = Template.bind({});
Example.args = {
  mainText: 'New cards in few clicks',
  cardText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  testId: '',
};
