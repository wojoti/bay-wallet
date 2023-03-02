import {Container} from 'components/atoms';
import {WelcomeCards, WelcomeMain} from 'components/organisms';
import {PropsWithChildren, useState} from 'react';
import Swiper from 'react-native-swiper';
import style from './WelcomeTemplate.style';

export type WelcomeTemplateProps = PropsWithChildren<{
  onButtonPress: () => void;
  testId?: string;
}>;

const WelcomeTemplate = ({onButtonPress, testId}: WelcomeTemplateProps) => {
  const [scrollable, setScrollable] = useState(true);
  return (
    <Container customStyle={style.wrapper} testId={testId}>
      <Swiper
        loop={false}
        activeDotColor={'white'}
        onIndexChanged={() => setScrollable(false)}
        scrollEnabled={scrollable}
        showsPagination={scrollable}>
        <WelcomeMain
          onButtonPress={onButtonPress}
          testId={'test-welcomemain-id'}
        />
        <WelcomeCards
          onButtonPress={onButtonPress}
          mainText1={'New cards in few clicks'}
          cardText1={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          }
          mainText2={'Easy payments'}
          cardText2={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          }
          testId={'test-welcomecards-id'}
        />
      </Swiper>
    </Container>
  );
};

export default WelcomeTemplate;
