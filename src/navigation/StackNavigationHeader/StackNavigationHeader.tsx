import {getHeaderTitle} from '@react-navigation/elements';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

import {
  ComposableButton,
  Container,
  Header,
  Img,
  ImgType,
} from 'components/atoms';
import style from './StackNavigationHeader.style';

const StackNavigationHeader = (props: NativeStackHeaderProps) => {
  const title = getHeaderTitle(props.options, props.route.name);
  return (
    <Container customStyle={style.wrapper} testId="stacknavigationheader">
      <Container
        direction="row"
        justify="space-around"
        customStyle={style.spacer}>
        <ComposableButton
          onPress={props.navigation.goBack}
          testId="stacknavigationheader-button-back">
          <Img src={ImgType.backArrow} height={12} width={24} alt="" />
        </ComposableButton>
        <Header>{title}</Header>
        <ComposableButton
          onPress={props.navigation.goBack}
          testId="stacknavigationheader-button-options">
          <Img src={ImgType.filter} height={24} width={24} alt="" />
        </ComposableButton>
      </Container>
    </Container>
  );
};

export default StackNavigationHeader;
