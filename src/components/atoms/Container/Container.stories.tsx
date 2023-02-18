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
    background: {
      control: {type: 'select'},
      options: ['primary', 'secondary'],
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
  background: 'primary',
  testId: '',
};
