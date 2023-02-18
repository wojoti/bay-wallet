import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {Img, ImgType} from 'components/atoms';

export default {
  title: 'Atoms/Img',
  component: Img,
} as ComponentMeta<typeof Img>;
const Template: ComponentStory<typeof Img> = args => <Img {...args} />;

export const CardWithLock = Template.bind({});
CardWithLock.args = {
  src: ImgType.cardLock,
  width: 100,
  height: 100,
  alt: 'cardLock',
  testId: '',
};
