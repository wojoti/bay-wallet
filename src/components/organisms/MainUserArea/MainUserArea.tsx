import {Container} from 'components/atoms';
import {BalanceBox, TransferAndWithdraw, UserBar} from 'components/molecules';
import {PropsWithChildren} from 'react';
import style from './MainUserArea.style';

export type MainUserAreaProps = PropsWithChildren<{
  onNotificationPress: () => void;
  onUserProfilePress: () => void;
  onDetailsPress: () => void;
  onTransferPress: () => void;
  onWithdrawPress: () => void;
  testId?: string;
}>;

const MainUserArea = ({
  onNotificationPress,
  onUserProfilePress,
  onDetailsPress,
  onTransferPress,
  onWithdrawPress,
  testId,
}: MainUserAreaProps) => (
  <Container
    flex={1}
    customStyle={style.contentWithRadius}
    align="center"
    testId={testId}>
    <Container customStyle={style.topContent}>
      <UserBar
        username={'David Kowalski'}
        onNotificationPress={onNotificationPress}
        onUserProfilePress={onUserProfilePress}
      />
    </Container>
    <Container customStyle={style.balanceBoxSizer}>
      <BalanceBox onDetailsPress={onDetailsPress} amount={'45.500,12'} />
    </Container>
    <Container customStyle={style.bottomContent}>
      <TransferAndWithdraw
        onTransferPress={onTransferPress}
        onWithdrawPress={onWithdrawPress}
      />
    </Container>
  </Container>
);

export default MainUserArea;
