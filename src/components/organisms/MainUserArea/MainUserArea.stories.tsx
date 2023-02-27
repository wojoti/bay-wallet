import {ComponentMeta, ComponentStory} from '@storybook/react-native';

import MainUserArea from './MainUserArea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/MainUserArea',
  component: MainUserArea,
  argTypes: {
    onNotificationPress: {action: 'onNotificationPress'},
    onUserProfilePress: {action: 'onUserProfilePress'},
    onDetailsPress: {action: 'onDetailsPress'},
    onTransferPress: {action: 'onTransferPress'},
    onWithdrawPress: {action: 'onWithdrawPress'},
  },
} as ComponentMeta<typeof MainUserArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainUserArea> = args => (
  <MainUserArea {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
};
