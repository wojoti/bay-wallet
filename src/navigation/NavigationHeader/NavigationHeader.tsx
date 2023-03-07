import {getHeaderTitle} from '@react-navigation/elements';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

import {
  ComposableButton,
  Container,
  Header,
  Img,
  ImgType,
} from 'components/atoms';
import style from './NavigationHeader.style';

const NavigationHeader = (props: NativeStackHeaderProps) => {
  const title = getHeaderTitle(props.options, props.route.name);
  return (
    <Container customStyle={style.wrapper} testId="navigationheader">
      <Container
        direction="row"
        justify="space-around"
        customStyle={style.spacer}>
        <ComposableButton
          onPress={props.navigation.goBack}
          testId="navigationheader-button-back">
          <Img src={ImgType.backArrow} height="12" width={24} alt="" />
        </ComposableButton>
        <Header>{title}</Header>
        <ComposableButton
          onPress={props.navigation.goBack}
          testId="navigationheader-button-options">
          <Img src={ImgType.filter} height="24" width={24} alt="" />
        </ComposableButton>
      </Container>
    </Container>
  );
};

export default NavigationHeader;
