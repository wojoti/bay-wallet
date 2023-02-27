import {Container, EmptyButton, Img, ImgType, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import {lightPrimary, secondary} from 'theme/colors';

export type TransferAndWithdrawProps = PropsWithChildren<{
  onTransferPress: () => void;
  onWithdrawPress: () => void;
  testId?: string;
}>;

const TransferAndWithdraw = ({
  onTransferPress,
  onWithdrawPress,
  testId,
}: TransferAndWithdrawProps) => {
  return (
    <Container direction="row" justify="space-between" testId={testId}>
      <EmptyButton
        color={lightPrimary}
        onPress={onTransferPress}
        testId={'transfer-button'}
        borderRadius={14}>
        <Container
          customStyle={{width: 155}}
          direction="row"
          justify="space-evenly"
          align="flex-start">
          <Img src={ImgType.transfer} height={'24'} width={24} alt={''} />
          <Label size={15} color={secondary}>
            Transfer
          </Label>
        </Container>
      </EmptyButton>
      <EmptyButton
        color={lightPrimary}
        onPress={onWithdrawPress}
        testId={'withdraw-button'}
        borderRadius={14}>
        <Container
          customStyle={{width: 155}}
          direction="row"
          justify="space-evenly"
          align="flex-start">
          <Img src={ImgType.withdraw} height={'24'} width={24} alt={''} />
          <Label size={15} color={secondary}>
            Withdraw
          </Label>
        </Container>
      </EmptyButton>
    </Container>
  );
};

export default TransferAndWithdraw;
