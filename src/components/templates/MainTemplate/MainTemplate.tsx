import {Container} from 'components/atoms';
import {MarketList, UserArea} from 'components/organisms';
import {PropsWithChildren} from 'react';
import style from './MainTemplate.style';

export type MainTemplateProps = PropsWithChildren<{
  onNotificationPress: () => void;
  onUserProfilePress: () => void;
  onDetailsPress: () => void;
  onTransferPress: () => void;
  onWithdrawPress: () => void;
  onViewMorePress: () => void;
  testId?: string;
}>;

const MainTemplate = ({
  onNotificationPress,
  onUserProfilePress,
  onDetailsPress,
  onTransferPress,
  onWithdrawPress,
  onViewMorePress,
  testId,
}: MainTemplateProps) => {
  return (
    <Container customStyle={style.wrapper} testId={testId} align="center">
      <Container flex={1}>
        <UserArea
          onNotificationPress={onNotificationPress}
          onUserProfilePress={onUserProfilePress}
          onDetailsPress={onDetailsPress}
          onTransferPress={onTransferPress}
          onWithdrawPress={onWithdrawPress}
        />
      </Container>
      <Container flex={1}>
        <MarketList onViewMorePress={onViewMorePress} />
      </Container>
    </Container>
  );
};

export default MainTemplate;
