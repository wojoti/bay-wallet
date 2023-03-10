import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {OperationValueSelector} from 'components/molecules';

export default {
  title: 'Molecules/OperationValueSelector',
  component: OperationValueSelector,
  argTypes: {
    onValuePress: {action: 'onValuePress'},
  },
} as ComponentMeta<typeof OperationValueSelector>;
const Template: ComponentStory<typeof OperationValueSelector> = args => (
  <OperationValueSelector {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
  value: '50',
  description: 'Operation Amount',
  selectedButton: 0,
};
