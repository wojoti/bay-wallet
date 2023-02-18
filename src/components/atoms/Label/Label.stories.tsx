import {ComponentMeta, ComponentStory} from '@storybook/react-native';

import Label from './Label';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    color: {
      control: {type: 'color'},
    },
    align: {
      control: {type: 'select'},
      options: ['left', 'auto', 'right', 'center', 'justify', undefined],
    },
  },
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = args => <Label {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  color: 'black',
  size: 14,
  testId: '',
  align: 'left',
};

export const CenteredExample = Template.bind({});
CenteredExample.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  color: '#6B6B6B',
  size: 20,
  testId: '',
  align: 'center',
};
