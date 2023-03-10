import {getHeaderTitle} from '@react-navigation/elements';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

import {
  ComposableButton,
  Container,
  Header,
  Img,
  ImgType,
} from 'components/atoms';
import {secondary} from 'theme/colors';
import style from './StackColorNavigationHeader.style';

const StackColorNavigationHeader = (props: NativeStackHeaderProps) => {
  const title = getHeaderTitle(props.options, props.route.name);
  return (
    <Container customStyle={style.wrapper} testId="stackcolornavigationheader">
      <Container
        direction="row"
        justify="space-around"
        customStyle={style.spacer}>
        <ComposableButton
          onPress={props.navigation.goBack}
          testId="stackcolornavigationheader-button-back">
          <Img src={ImgType.backArrowWhite} height={12} width={24} alt="" />
        </ComposableButton>
        <Header color={secondary}>{title}</Header>
        <Container customStyle={style.position} />
      </Container>
    </Container>
  );
};

export default StackColorNavigationHeader;
