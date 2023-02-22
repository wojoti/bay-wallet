import {ComponentMeta, ComponentStory} from '@storybook/react-native';

import Header from './Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Header',
  component: Header,
  argTypes: {
    color: {
      control: {type: 'color'},
    },
    align: {
      control: {type: 'select'},
      options: ['left', 'auto', 'right', 'center', 'justify', undefined],
    },
  },
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'BayWallet',
  color: 'black',
  size: 34,
  testId: '',
  align: 'left',
};

export const CenteredExample = Template.bind({});
CenteredExample.args = {
  children: 'New cards in few clicks',
  color: '#6B6B6B',
  size: 40,
  testId: '',
  align: 'center',
};
