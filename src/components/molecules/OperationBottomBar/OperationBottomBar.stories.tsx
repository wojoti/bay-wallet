import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {OperationBottomBar} from 'components/molecules';

export default {
  title: 'Molecules/OperationBottomBar',
  component: OperationBottomBar,
  argTypes: {
    onCardPress: {action: 'onCardPress'},
    onMenuPress: {action: 'onMenuPress'},
    onProfilePress: {action: 'onProfilePress'},
  },
} as ComponentMeta<typeof OperationBottomBar>;
const Template: ComponentStory<typeof OperationBottomBar> = args => (
  <OperationBottomBar {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
};
