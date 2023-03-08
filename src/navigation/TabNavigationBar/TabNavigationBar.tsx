import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {ComposableButton, Container, Img, ImgType} from 'components/atoms';
import style from './TabNavigationBar.style';

const TabNavigationBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const onCardPress = () => {
    navigation.navigate('Cards');
  };

  const onMenuPress = () => {
    navigation.navigate('Main');
  };

  const onChartPress = () => {
    navigation.navigate('Main');
  };
  return (
    <Container
      testId="tabnavigationbar"
      customStyle={style.wrapper}
      align="center">
      <Container
        direction="row"
        justify="space-between"
        align="center"
        customStyle={style.whiteArea}>
        <ComposableButton
          customStyle={style.button}
          onPress={onCardPress}
          testId="tabnavigationbar-cards">
          {state.index === 1 ? (
            <Img src={ImgType.iconCardSelected} height={17} width={23} alt="" />
          ) : (
            <Img src={ImgType.iconCard} height={17} width={23} alt="" />
          )}
        </ComposableButton>
        <ComposableButton
          customStyle={
            state.index === 0 ? style.selectedBigButton : style.bigButton
          }
          onPress={onMenuPress}
          testId="tabnavigationbar-menu">
          {state.index === 0 ? (
            <Img src={ImgType.squares} height={30} width={30} alt="" />
          ) : (
            <Img src={ImgType.squaresSelected} height={30} width={30} alt="" />
          )}
        </ComposableButton>
        <ComposableButton
          customStyle={state.index === 2 ? style.button : style.button}
          onPress={onChartPress}
          testId="tabnavigationbar-chart">
          {state.index === 2 ? (
            <Img
              src={ImgType.iconChartSelected}
              height={31}
              width={23}
              alt=""
            />
          ) : (
            <Img src={ImgType.iconChart} height={31} width={23} alt="" />
          )}
        </ComposableButton>
      </Container>
    </Container>
  );
};

export default TabNavigationBar;
