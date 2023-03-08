import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {getHeaderTitle} from '@react-navigation/elements';

import {
  ComposableButton,
  Container,
  Header,
  Img,
  ImgType,
} from 'components/atoms';
import style from './TabNavigationHeader.style';

const TabNavigationHeader = (props: BottomTabHeaderProps) => {
  const title = getHeaderTitle(props.options, props.route.name);

  const onNotificationPress = () => {
    console.log('onNotificationPress');
  };
  const onUserProfilePress = () => {
    console.log('onUserProfilePress');
  };
  return (
    <Container
      customStyle={style.wrapper}
      justify="center"
      align="center"
      testId="tabnavigationheader">
      <Container
        direction="row"
        justify="space-around"
        customStyle={style.spacer}>
        <Container flex={7} justify="center" align="flex-start">
          <Header>{title}</Header>
        </Container>

        <Container
          flex={3}
          direction="row"
          justify="space-around"
          align="center">
          <ComposableButton
            onPress={onNotificationPress}
            testId="userbar-notification">
            <Img
              src={ImgType.colorNotification}
              height={26}
              width={24}
              alt=""
            />
          </ComposableButton>
          <ComposableButton
            onPress={onUserProfilePress}
            testId="userbar-userprofile">
            <Img src={ImgType.profile} height={40} width={40} alt="" />
          </ComposableButton>
        </Container>
      </Container>
    </Container>
  );
};

export default TabNavigationHeader;
