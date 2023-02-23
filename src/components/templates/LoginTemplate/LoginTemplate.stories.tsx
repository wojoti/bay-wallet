import {ComponentMeta, ComponentStory} from '@storybook/react-native';

import LoginTemplate from './LoginTemplate';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/LoginTemplate',
  component: LoginTemplate,
  argTypes: {
    onLoginSubmit: {action: 'onLoginSubmit'},
    onPasswordReset: {action: 'onPasswordReset'},
    onSocialLoginPress: {action: 'onSocialLoginPress'},
  },
} as ComponentMeta<typeof LoginTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginTemplate> = args => (
  <LoginTemplate {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
};
