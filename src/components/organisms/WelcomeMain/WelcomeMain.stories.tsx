import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {primary, secondary} from 'theme/colors';

import WelcomeMain from './WelcomeMain';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'organisms/WelcomeMain',
  component: WelcomeMain,
  argTypes: {
    onButtonPress: {action: 'onButtonPress'},
  },
} as ComponentMeta<typeof WelcomeMain>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WelcomeMain> = args => (
  <WelcomeMain {...args} />
);

export const Example = Template.bind({});
Example.args = {
  mainColor: primary,
  accentColor: secondary,
  testId: '',
};
