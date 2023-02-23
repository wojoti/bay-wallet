import {ComponentMeta, ComponentStory} from '@storybook/react-native';

import Breakline from './Breakline';

export default {
  title: 'Molecules/Breakline',
  component: Breakline,
  argTypes: {},
} as ComponentMeta<typeof Breakline>;

const Template: ComponentStory<typeof Breakline> = args => (
  <Breakline {...args} />
);

export const Example = Template.bind({});
Example.args = {
  children: 'or sign in with',
  testId: '',
};
