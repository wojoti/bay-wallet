import {useIsFocused, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {WelcomeTemplate} from 'components/templates';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from 'store/store';
import {lightMode} from 'store/styleSlice';

export type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

export interface WelcomeScreenProps {
  testId?: string;
}

const WelcomeScreen = ({testId}: WelcomeScreenProps) => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(lightMode());
      console.log('welcome screen');
    }
  }, [dispatch, isFocused]);

  const onButtonPress = () => {
    navigation.navigate('Login');
  };

  return <WelcomeTemplate onButtonPress={onButtonPress} testId={testId} />;
};

export default WelcomeScreen;
