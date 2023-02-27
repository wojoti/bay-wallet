import {Container, Label} from 'components/atoms';
import {MainUserArea} from 'components/organisms';
import {PropsWithChildren} from 'react';
import style from './MainTemplate.style';

export type MainTemplateProps = PropsWithChildren<{
  onNotificationPress: () => void;
  onUserProfilePress: () => void;
  onDetailsPress: () => void;
  onTransferPress: () => void;
  onWithdrawPress: () => void;
  testId?: string;
}>;

const MainTemplate = ({
  onNotificationPress,
  onUserProfilePress,
  onDetailsPress,
  onTransferPress,
  onWithdrawPress,
  testId,
}: MainTemplateProps) => (
  <Container customStyle={style.wrapper} testId={testId}>
    <Container flex={1}>
      <MainUserArea
        onNotificationPress={onNotificationPress}
        onUserProfilePress={onUserProfilePress}
        onDetailsPress={onDetailsPress}
        onTransferPress={onTransferPress}
        onWithdrawPress={onWithdrawPress}
      />
    </Container>
    <Container flex={1}>
      <Label>Latest market</Label>
    </Container>
  </Container>
);

export default MainTemplate;
