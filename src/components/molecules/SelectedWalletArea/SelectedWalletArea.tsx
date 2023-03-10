import {Button, Container, Header, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import {iconGrey, pink} from 'theme/colors';
import style from './SelectedWalletArea.style';

export type SelectedWalletAreaProps = PropsWithChildren<{
  onChangePress: () => void;
  walletValue: string;
  walletName: string;
  testId?: string;
}>;

const SelectedWalletArea = ({
  walletValue,
  walletName,
  onChangePress,
  testId,
}: SelectedWalletAreaProps) => {
  return (
    <Container
      customStyle={style.wrapper}
      testId={testId}
      direction="row"
      justify="space-around">
      <Container flex={1} justify="flex-start">
        <Header
          spacing={1}
          size={28}
          color={pink}
          testId="selectedwalletarea-header">
          {walletValue}
        </Header>
        <Label size={15} color={iconGrey} testId="selectedwalletarea-label">
          {walletName}
        </Label>
      </Container>
      <Container flex={1} align="flex-end" justify="flex-end">
        <Button
          customStyle={style.button}
          customFontStyle={style.buttonFont}
          onPress={onChangePress}
          testId="selectedwalletarea-button">
          Change
        </Button>
      </Container>
    </Container>
  );
};

export default SelectedWalletArea;
