import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {Img, ImgType} from 'components/atoms';
import Column from 'components/atoms/Column/Column';
import Container from 'components/atoms/Container/Container';
import BW_logo_splash_color from 'img/bw_logo_splash_color.svg';
import {Text} from 'react-native';
import Swiper from 'react-native-swiper';

export type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

const WelcomeScreen = () => {
  return (
    <Container background={'primary'}>
      <Swiper loop={false} activeDotColor="white">
        <Column>
          <BW_logo_splash_color width={100} height={100} />
          <Img src={ImgType.cardLock} width={100} height={100} alt={''} />
        </Column>
        <Column>
          <Text>slide 2</Text>
        </Column>
      </Swiper>
    </Container>
  );
};

export default WelcomeScreen;
