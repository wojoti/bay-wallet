import {Container, Img, ImgType} from 'components/atoms';
import {WelcomeCardsArea} from 'components/molecules';
import {PropsWithChildren} from 'react';
import Swiper from 'react-native-swiper';
import {primary} from 'theme/colors';
import style from './WelcomeCards.style';

export type WelcomeCardsProps = PropsWithChildren<{
  onButtonPress: () => void;
  mainColor: string;
  cardColor: string;
  mainText1: string;
  cardText1: string;
  mainText2: string;
  cardText2: string;
  testId?: string;
}>;

const WelcomeCards = ({
  onButtonPress,
  mainColor,
  cardColor,
  mainText1,
  cardText1,
  mainText2,
  cardText2,
  testId,
}: WelcomeCardsProps) => {
  return (
    <Container
      flex={1}
      justify="center"
      align="center"
      customStyle={style({background: mainColor}).wrapper}
      testId={testId}>
      <Container
        flex={1.2}
        customStyle={style({background: mainColor}).wrapper}
        justify="flex-end">
        <Img
          src={ImgType.cardLock}
          height={330}
          alt={''}
          testId={'welcomecards-img'}
        />
      </Container>
      <Container
        flex={1}
        customStyle={
          style({background: cardColor, radius: 45}).contentWithRadius
        }
        align="center"
        testId={'welcomecards-radius'}>
        <Swiper
          loop={false}
          activeDotColor={primary}
          paginationStyle={style({}).pagination}>
          <WelcomeCardsArea
            onButtonPress={onButtonPress}
            mainText={mainText1}
            cardText={cardText1}
            testId={'welcomecards-welcomecardsarea1'}
          />

          <WelcomeCardsArea
            onButtonPress={onButtonPress}
            mainText={mainText2}
            cardText={cardText2}
            testId={'welcomecards-welcomecardsarea2'}
          />
        </Swiper>
      </Container>
    </Container>
  );
};

export default WelcomeCards;
