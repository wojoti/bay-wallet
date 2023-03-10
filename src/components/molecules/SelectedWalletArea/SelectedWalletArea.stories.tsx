import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {SelectedWalletArea} from 'components/molecules';

export default {
  title: 'Molecules/SelectedWalletArea',
  component: SelectedWalletArea,
  argTypes: {
    onChangePress: {action: 'onChangePress'},
  },
} as ComponentMeta<typeof SelectedWalletArea>;
const Template: ComponentStory<typeof SelectedWalletArea> = args => (
  <SelectedWalletArea {...args} />
);

export const Example = Template.bind({});
Example.args = {
  walletValue: '$ 1.000',
  walletName: 'Example Wallet',
  testId: '',
};
