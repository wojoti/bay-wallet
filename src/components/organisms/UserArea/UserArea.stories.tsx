import {ComponentMeta, ComponentStory} from '@storybook/react-native';

import UserArea from './UserArea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/UserArea',
  component: UserArea,
  argTypes: {
    onNotificationPress: {action: 'onNotificationPress'},
    onUserProfilePress: {action: 'onUserProfilePress'},
    onDetailsPress: {action: 'onDetailsPress'},
    onTransferPress: {action: 'onTransferPress'},
    onWithdrawPress: {action: 'onWithdrawPress'},
  },
} as ComponentMeta<typeof UserArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserArea> = args => (
  <UserArea {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
};
