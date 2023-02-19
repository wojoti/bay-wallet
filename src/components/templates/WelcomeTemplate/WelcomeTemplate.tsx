import {Container} from 'components/atoms';
import {CardWelcome, MainWelcome} from 'components/organisms';
import {PropsWithChildren} from 'react';
import Swiper from 'react-native-swiper';
import {primary, secondary} from 'style/style';

export type WelcomeTemplateProps = PropsWithChildren<{
  onButtonPress: () => void;
}>;

const WelcomeTemplate = ({onButtonPress}: WelcomeTemplateProps) => {
  return (
    <Container background={primary} height="100%">
      <Swiper loop={false} activeDotColor={'white'}>
        <MainWelcome
          onButtonPress={onButtonPress}
          mainColor={primary}
          accentColor={secondary}
        />
        <CardWelcome
          onButtonPress={onButtonPress}
          mainColor={primary}
          cardColor={secondary}
          mainText={'New cards in few clicks'}
          cardText={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          }
        />
        <CardWelcome
          onButtonPress={onButtonPress}
          mainColor={primary}
          cardColor={secondary}
          mainText={'Easy payments'}
          cardText={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          }
        />
        {/* <CardWelcome
          onButtonPress={onButtonPress}
          mainColor={primary}
          cardColor={secondary}
          title={'New cards in few clicks'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          }
        />
        <CardWelcome
          onButtonPress={onButtonPress}
          mainColor={primary}
          cardColor={secondary}
          title={'Easy payments'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          }
        /> */}
      </Swiper>
    </Container>
  );
};

export default WelcomeTemplate;
