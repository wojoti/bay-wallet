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
  onCardPress: () => void;
  onMenuPress: () => void;
  onChartPress: () => void;
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
  onCardPress,
  onMenuPress,
  onChartPress,
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
          testId="maintemplate-userarea"
        />
      </Container>
      <Container flex={1}>
        <MarketList
          onViewMorePress={onViewMorePress}
          data={data}
          testId="maintemplate-marketlist"
        />
      </Container>
      <OperationBottomBar
        onCardPress={onCardPress}
        onMenuPress={onMenuPress}
        onChartPress={onChartPress}
        testId="maintemplate-operationbottombar"
      />
    </Container>
  );
};

export default MainTemplate;