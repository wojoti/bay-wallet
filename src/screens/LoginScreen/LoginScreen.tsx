import {useIsFocused, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {LoginTemplate} from 'components/templates';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from 'store/store';
import {statusBarDarkMode} from 'store/styleSlice';

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
      dispatch(statusBarDarkMode());
    }
  }, [dispatch, isFocused]);

  const onLoginSubmit = (username: string, password: string) => {
    console.log('username:' + username + ',pwd:' + password);
    navigation.navigate('Tab');
  };

  const onPasswordReset = () => {
    navigation.navigate('Welcome');
  };

  const onSocialLoginPress = (origin: string) => {
    navigation.navigate('Storybook');
    console.log(origin);
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
