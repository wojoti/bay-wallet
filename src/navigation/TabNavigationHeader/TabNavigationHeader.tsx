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
  return (
    <Container customStyle={style.wrapper} testId="tabnavigationheader">
      <Container
        direction="row"
        justify="space-around"
        customStyle={style.spacer}>
        <ComposableButton
          onPress={props.navigation.goBack}
          testId="tabnavigationheader-button-back">
          <Img src={ImgType.backArrow} height="12" width={24} alt="" />
        </ComposableButton>
        <Header>{title}</Header>
        <ComposableButton
          onPress={props.navigation.goBack}
          testId="tabnavigationheader-button-options">
          <Img src={ImgType.filter} height="24" width={24} alt="" />
        </ComposableButton>
      </Container>
    </Container>
  );
};

export default TabNavigationHeader;
