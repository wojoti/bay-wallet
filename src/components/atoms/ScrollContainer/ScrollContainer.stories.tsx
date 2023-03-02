import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {ScrollContainer} from 'components/atoms';
import {Text, View} from 'react-native';
import {ScrollContainerProps} from './ScrollContainer';

export default {
  title: 'Atoms/ScrollContainer',
  component: ScrollContainer,
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
      ],
    },
    align: {
      control: {type: 'select'},
      options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
    },
    background: {
      control: {type: 'color'},
    },
  },
} as ComponentMeta<typeof ScrollContainer>;
const Template: ComponentStory<typeof ScrollContainer> = (
  args: ScrollContainerProps,
) => (
  <ScrollContainer {...args}>
    <Text>Example text</Text>
    <Text>Example text</Text>
    <Text>Example text</Text>

    <Text>Example text</Text>
    <Text>Example text</Text>
    <Text>Example text</Text>

    <Text>Example text</Text>
    <Text>Example text</Text>
    <Text>Example text</Text>

    <Text>Example text</Text>
    <Text>Example text</Text>
    <Text>Example text</Text>

    <Text>Example text</Text>
    <Text>Example text</Text>
    <Text>Example text</Text>

    <Text>Example text</Text>
    <Text>Example text</Text>
    <Text>Example text</Text>

    <Text>Example text</Text>
    <Text>Example text</Text>
    <Text>Example text</Text>
  </ScrollContainer>
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
  align: 'flex-start',
  justify: 'flex-start',
  flex: 0,
};
