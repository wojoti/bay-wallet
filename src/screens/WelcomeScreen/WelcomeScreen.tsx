import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import Column from 'components/atoms/Column/Column';
import Container from 'components/atoms/Container/Container';
import {Dimensions, StyleSheet, Text} from 'react-native';
import Swiper from 'react-native-swiper';

export type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const WelcomeScreen = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
    <Container background={'primary'}>
      <Swiper loop={false} activeDotColor="white">
        <Column background="inherit">
          <Text>slide 1</Text>
        </Column>
        <Column>
          <Text>slide 2</Text>
        </Column>
      </Swiper>
    </Container>
  );
};

export default WelcomeScreen;
