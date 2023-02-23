import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {primary, secondary} from 'theme/colors';

import WelcomeCards from './WelcomeCards';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/WelcomeCards',
  component: WelcomeCards,
  argTypes: {
    onButtonPress: {action: 'onButtonPress'},
  },
} as ComponentMeta<typeof WelcomeCards>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WelcomeCards> = args => (
  <WelcomeCards {...args} />
);

export const Example = Template.bind({});
Example.args = {
  mainColor: primary,
  cardColor: secondary,
  mainText1: 'New cards in few clicks',
  cardText1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  mainText2: 'Easy payments',
  cardText2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  testId: '',
};
