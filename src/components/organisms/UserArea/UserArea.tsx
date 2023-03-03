import {Container} from 'components/atoms';
import {BalanceBox, TransferAndWithdraw, UserBar} from 'components/molecules';
import {PropsWithChildren} from 'react';
import style from './UserArea.style';

export type UserAreaProps = PropsWithChildren<{
  onNotificationPress: () => void;
  onUserProfilePress: () => void;
  onDetailsPress: () => void;
  onTransferPress: () => void;
  onWithdrawPress: () => void;
  testId?: string;
}>;

const UserArea = ({
  onNotificationPress,
  onUserProfilePress,
  onDetailsPress,
  onTransferPress,
  onWithdrawPress,
  testId,
}: UserAreaProps) => (
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
        testId="userarea-userbar"
      />
    </Container>
    <Container customStyle={style.balanceBoxSizer}>
      <BalanceBox
        onDetailsPress={onDetailsPress}
        amount={'45.500,12'}
        percent={'4.5'}
        balanceLabel={'Your main balance'}
        detailsLabel={'Details >'}
        testId="userarea-balancebox"
      />
    </Container>
    <Container customStyle={style.bottomContent}>
      <TransferAndWithdraw
        onTransferPress={onTransferPress}
        onWithdrawPress={onWithdrawPress}
        testId="userarea-transferandwithdraw"
      />
    </Container>
  </Container>
);

export default UserArea;
