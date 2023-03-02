import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {MarketData} from 'data/index';

import MainTemplate from './MainTemplate';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/MainTemplate',
  component: MainTemplate,
  argTypes: {
    onNotificationPress: {action: 'onNotificationPress'},
    onUserProfilePress: {action: 'onUserProfilePress'},
    onDetailsPress: {action: 'onDetailsPress'},
    onTransferPress: {action: 'onTransferPress'},
    onWithdrawPress: {action: 'onWithdrawPress'},
    onViewMorePress: {action: 'onViewMorePress'},
  },
} as ComponentMeta<typeof MainTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainTemplate> = args => (
  <MainTemplate {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
  data: MarketData,
};
