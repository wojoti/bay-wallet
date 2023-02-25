import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {primary} from 'theme/colors';

import Link from './Link';

export default {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    color: {
      control: {type: 'color'},
    },
    onPress: {action: 'onPress'},
    align: {
      control: {type: 'select'},
      options: ['left', 'right', 'auto', 'center', 'justify'],
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const Example = Template.bind({});
Example.args = {
  bold: false,
  color: primary,
  children: 'Type here for reset',
  align: 'left',
  testId: '',
};
