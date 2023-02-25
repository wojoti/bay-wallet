import {useIsFocused, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {LoginTemplate} from 'components/templates';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from 'store/store';
import {darkMode} from 'store/styleSlice';

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export interface LoginScreenProps {
  testId?: string;
}

const LoginScreen = ({testId}: LoginScreenProps) => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(darkMode());
    }
  }, [dispatch, isFocused]);

  const onLoginSubmit = (username: string, password: string) => {
    console.log('username:' + username + ',pwd:' + password);
    //navigation.navigate('Storybook');
  };

  const onPasswordReset = () => {
    navigation.navigate('Welcome');
  };

  const onSocialLoginPress = (icon: string) => {
    navigation.navigate('Storybook');
    console.log(icon);
  };

  return (
    <LoginTemplate
      onLoginSubmit={onLoginSubmit}
      onPasswordReset={onPasswordReset}
      onSocialLoginPress={onSocialLoginPress}
      testId={testId}
    />
  );
};

export default LoginScreen;
