import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {hideNavigationBar} from 'react-native-navigation-bar-color';
import {Provider, useSelector} from 'react-redux';
import {LoginScreen, MainScreen, WelcomeScreen} from 'screens/index';
import {store} from 'store/store';
import {selectStyleData} from 'store/styleSlice';
import {
  default as Storybook,
  default as StorybookUIHMRRoot,
} from './.storybook/Storybook';
export {StorybookUIHMRRoot};

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Main: undefined;
  Storybook: undefined;
};

function App(): JSX.Element {
  const style = useSelector(selectStyleData);
  useEffect(() => {
    hideNavigationBar();
  }, []);
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <StatusBar barStyle={style.barStyle} backgroundColor="transparent" />
      <Stack.Navigator
        initialRouteName={'Main'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Storybook" component={Storybook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AppSelector = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default AppSelector;
