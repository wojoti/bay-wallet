import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {Text} from 'react-native';
import {green, lime} from 'theme/colors';

import GradientArea from './GradientArea';

export default {
  title: 'Molecules/GradientArea',
  component: GradientArea,
} as ComponentMeta<typeof GradientArea>;

const Template: ComponentStory<typeof GradientArea> = args => (
  <GradientArea {...args}>
    <Text>Added required component</Text>
  </GradientArea>
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
  colors: [green, lime],
  start: {
    x: 0,
    y: 0,
  },
  end: {
    x: 1,
    y: 1,
  },
};
