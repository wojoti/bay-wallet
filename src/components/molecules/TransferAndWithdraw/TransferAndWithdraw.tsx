import {
  ComposableButton,
  Container,
  Img,
  ImgType,
  Label,
} from 'components/atoms';
import {PropsWithChildren} from 'react';
import {secondary} from 'theme/colors';
import style from './TransferAndWithdraw.style';

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
      <ComposableButton
        customStyle={style.btnStyle}
        onPress={onTransferPress}
        testId={'transfer-button'}>
        <Container
          customStyle={style.sizer}
          direction="row"
          justify="space-evenly"
          align="flex-start">
          <Img src={ImgType.transfer} height={'24'} width={24} alt={''} />
          <Label size={15} color={secondary}>
            Transfer
          </Label>
        </Container>
      </ComposableButton>
      <ComposableButton
        customStyle={style.btnStyle}
        onPress={onWithdrawPress}
        testId={'withdraw-button'}>
        <Container
          customStyle={style.sizer}
          direction="row"
          justify="space-evenly"
          align="flex-start">
          <Img src={ImgType.withdraw} height={'24'} width={24} alt={''} />
          <Label size={15} color={secondary}>
            Withdraw
          </Label>
        </Container>
      </ComposableButton>
    </Container>
  );
};

export default TransferAndWithdraw;
