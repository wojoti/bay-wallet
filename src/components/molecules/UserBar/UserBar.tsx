import {
  ComposableButton,
  Container,
  Header,
  Img,
  ImgType,
  Label,
} from 'components/atoms';
import {PropsWithChildren} from 'react';
import {secondary} from 'theme/colors';

export type UserBarProps = PropsWithChildren<{
  username: string;
  onNotificationPress: () => void;
  onUserProfilePress: () => void;
  testId?: string;
}>;

const UserBar = ({
  username,
  onNotificationPress,
  onUserProfilePress,
  testId,
}: UserBarProps) => {
  return (
    <Container direction="row" testId={testId}>
      <Container align="flex-start" flex={2.6}>
        <Label testId="userbar-welcome" color={secondary}>
          Good Morning
        </Label>
        <Header testId="userbar-username" color={secondary}>
          {username}
        </Header>
      </Container>
      <Container
        justify="space-between"
        flex={1}
        align="center"
        direction="row">
        <ComposableButton
          onPress={onNotificationPress}
          testId="userbar-notification">
          <Img src={ImgType.notificationRed} height={26} width={24} alt="" />
        </ComposableButton>
        <ComposableButton
          onPress={onUserProfilePress}
          testId="userbar-userprofile">
          <Img src={ImgType.profile} height={40} width={40} alt="" />
        </ComposableButton>
      </Container>
    </Container>
  );
};

export default UserBar;
