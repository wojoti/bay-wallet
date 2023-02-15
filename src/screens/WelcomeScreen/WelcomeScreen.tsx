import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import Column from 'components/atoms/Column/Column';
import Container from 'components/atoms/Container/Container';
import BW_Logo_Splash from 'img/bw_logo_splash.svg';
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
          <BW_Logo_Splash width={100} height={100} />
        </Column>
        <Column>
          <Text>slide 2</Text>
        </Column>
      </Swiper>
    </Container>
  );
};

export default WelcomeScreen;
