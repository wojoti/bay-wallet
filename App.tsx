import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationHeader from 'navigation/NavigationHeader/NavigationHeader';
import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {hideNavigationBar} from 'react-native-navigation-bar-color';
import {Provider, useSelector} from 'react-redux';
import {
  LoginScreen,
  MainScreen,
  TransactionsScreen,
  WelcomeScreen,
} from 'screens/index';
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
  Transactions: undefined;
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
        initialRouteName={'Welcome'}
        screenOptions={{
          headerShown: false,
          header: NavigationHeader,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen
          name="Transactions"
          component={TransactionsScreen}
          options={{
            headerShown: true,
          }}
        />
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
