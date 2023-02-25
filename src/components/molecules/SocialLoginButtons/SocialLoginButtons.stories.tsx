import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {SocialLoginButtons} from 'components/molecules';

export default {
  title: 'Atoms/SocialLoginButtons',
  component: SocialLoginButtons,
  argTypes: {
    onIconPress: {action: 'onIconPress'},
  },
} as ComponentMeta<typeof SocialLoginButtons>;
const Template: ComponentStory<typeof SocialLoginButtons> = args => (
  <SocialLoginButtons {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
};
