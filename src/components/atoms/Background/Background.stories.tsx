import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {Background} from 'components/atoms';
import {Text} from 'react-native';
import {BackgroundProps} from './Background';

export default {
  title: 'Atoms/Background',
  component: Background,
} as ComponentMeta<typeof Background>;
const Template: ComponentStory<typeof Background> = (args: BackgroundProps) => (
  <Background {...args}>
    <Text>Example text</Text>
    <Text>Example text</Text>
    <Text>Example text</Text>
  </Background>
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
  source: require('img/wave.png'),
};

export const ExampleWithCustomStyle = Template.bind({});
ExampleWithCustomStyle.args = {
  testId: '',
  source: require('img/wave.png'),
  customStyle: {padding: 20},
};
