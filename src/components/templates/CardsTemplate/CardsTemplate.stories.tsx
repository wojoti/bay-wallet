import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {CardsData} from 'data/index';

import CardsTemplate from './CardsTemplate';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/CardsTemplate',
  component: CardsTemplate,
} as ComponentMeta<typeof CardsTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardsTemplate> = args => (
  <CardsTemplate {...args} />
);

export const Example = Template.bind({});
Example.args = {
  testId: '',
  data: CardsData,
};
