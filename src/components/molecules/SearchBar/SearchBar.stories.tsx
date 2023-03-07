import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {SearchBar} from 'components/molecules';

export default {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  argTypes: {
    onChange: {action: 'onChange'},
    onPress: {action: 'onPress'},
  },
} as ComponentMeta<typeof SearchBar>;
const Template: ComponentStory<typeof SearchBar> = args => (
  <SearchBar {...args} />
);

export const Example = Template.bind({});
Example.args = {
  value: '',
  testId: '',
};
