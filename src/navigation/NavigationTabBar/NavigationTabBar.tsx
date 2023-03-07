import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {ComposableButton, Container, Img, ImgType} from 'components/atoms';
import style from './NavigationTabBar.style';

const NavigationTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const onCardPress = () => {
    navigation.navigate('Main');
  };

  const onMenuPress = () => {
    navigation.navigate('Main');
  };

  const onChartPress = () => {
    navigation.navigate('Main');
  };

  console.log(state.index);
  return (
    <Container
      testId={'navigationtabbar'}
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
          testId={'navigationtabbar-cards'}>
          <Img src={ImgType.iconCard} height={'17'} width={23} alt={''} />
        </ComposableButton>
        <ComposableButton
          customStyle={style.purpleButton}
          onPress={onMenuPress}
          testId={'navigationtabbar-menu'}>
          <Img src={ImgType.squares} height={'30'} width={30} alt={''} />
        </ComposableButton>
        <ComposableButton
          customStyle={style.button}
          onPress={onChartPress}
          testId={'navigationtabbar-chart'}>
          <Img src={ImgType.iconChart} height={'31'} width={23} alt={''} />
        </ComposableButton>
      </Container>
    </Container>
  );
};

export default NavigationTabBar;
