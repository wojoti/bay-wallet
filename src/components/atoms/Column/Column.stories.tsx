import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {Column} from 'components/atoms';
import {Text, View} from 'react-native';
import {ColumnProps} from './Column';

export default {
  title: 'Atoms/Column',
  component: Column,
  decorators: [
    Story => (
      <View style={{borderWidth: 1}}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    justify: {
      control: {type: 'select'},
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
        undefined,
      ],
    },
    align: {
      control: {type: 'select'},
      options: [
        'flex-start',
        'flex-end',
        'center',
        'stretch',
        'baseline',
        undefined,
      ],
    },
    background: {
      control: {type: 'color'},
    },
  },
} as ComponentMeta<typeof Column>;
const Template: ComponentStory<typeof Column> = (args: ColumnProps) => (
  <Column {...args}>
    <Text>Example text</Text>
    <Text>Example text</Text>
    <Text>Example text</Text>
  </Column>
);

export const Example = Template.bind({});
Example.args = {
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0,
  pt: 0,
  pb: 0,
  pl: 0,
  pr: 0,
  testId: '',
  align: 'flex-start',
  justify: 'flex-start',
  flex: 0,
  background: 'inherit',
};
