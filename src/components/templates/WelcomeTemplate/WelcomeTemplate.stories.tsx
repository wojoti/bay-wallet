import {ComponentMeta, ComponentStory} from '@storybook/react-native';

import WelcomeTemplate from './WelcomeTemplate';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'organisms/WelcomeTemplate',
  component: WelcomeTemplate,
  argTypes: {
    onButtonPress: {action: 'onButtonPress'},
  },
} as ComponentMeta<typeof WelcomeTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WelcomeTemplate> = args => (
  <WelcomeTemplate {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
};
