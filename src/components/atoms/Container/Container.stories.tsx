import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {Container} from 'components/atoms';
import {Text, View} from 'react-native';
import {ContainerProps} from './Container';

export default {
  title: 'Atoms/Container',
  component: Container,
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
} as ComponentMeta<typeof Container>;
const Template: ComponentStory<typeof Container> = (args: ContainerProps) => (
  <Container {...args}>
    <Text>Example text</Text>
    <Text>Example text</Text>
    <Text>Example text</Text>
  </Container>
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
  width: '',
  height: '',
  radius: 0,
};
