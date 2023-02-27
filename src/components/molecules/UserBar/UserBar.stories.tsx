import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {UserBar} from 'components/molecules';

export default {
  title: 'Molecules/UserBar',
  component: UserBar,
  argTypes: {
    onNotificationPress: {action: 'onNotificationPress'},
    onUserProfilePress: {action: 'onNotificationPress'},
  },
} as ComponentMeta<typeof UserBar>;
const Template: ComponentStory<typeof UserBar> = args => <UserBar {...args} />;

export const Example = Template.bind({});
Example.args = {
  testId: '',
  username: 'David Kowalski',
};
