import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationTabBar, StackNavigationHeader} from 'navigation/index';
import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {hideNavigationBar} from 'react-native-navigation-bar-color';
import {Provider, useSelector} from 'react-redux';
import {
  CardsScreen,
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
  Tab: undefined;
  Transactions: undefined;
  Storybook: undefined;
};

export type RootTabParamList = {
  Main: undefined;
  Cards: undefined;
};

const StackNavigator = () => {
  const style = useSelector(selectStyleData);
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <StatusBar barStyle={style.barStyle} backgroundColor="transparent" />
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          header: StackNavigationHeader,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Tab" component={TabNavigator} />
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
};

const TabNavigator = () => {
  const Tab = createBottomTabNavigator<RootTabParamList>();
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
      }}
      tabBar={NavigationTabBar}>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Cards" component={CardsScreen} />
    </Tab.Navigator>
  );
};

function App(): JSX.Element {
  useEffect(() => {
    hideNavigationBar();
  }, []);
  return <StackNavigator />;
}

const AppSelector = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default AppSelector;
