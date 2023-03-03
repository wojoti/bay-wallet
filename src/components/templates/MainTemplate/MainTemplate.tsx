import {Container} from 'components/atoms';
import {OperationBottomBar} from 'components/molecules';
import {MarketData, MarketList, UserArea} from 'components/organisms';
import {PropsWithChildren} from 'react';
import style from './MainTemplate.style';

export type MainTemplateProps = PropsWithChildren<{
  onNotificationPress: () => void;
  onUserProfilePress: () => void;
  onDetailsPress: () => void;
  onTransferPress: () => void;
  onWithdrawPress: () => void;
  onViewMorePress: () => void;
  data: MarketData[];
  testId?: string;
}>;

const MainTemplate = ({
  onNotificationPress,
  onUserProfilePress,
  onDetailsPress,
  onTransferPress,
  onWithdrawPress,
  onViewMorePress,
  data,
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
        <MarketList onViewMorePress={onViewMorePress} data={data} />
      </Container>
      <OperationBottomBar
        onCardPress={() => {
          console.log('');
        }}
        onMenuPress={() => {
          console.log('');
        }}
        onChartPress={() => {
          console.log('');
        }}
      />
    </Container>
  );
};

export default MainTemplate;
