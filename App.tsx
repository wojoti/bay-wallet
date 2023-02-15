import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {hideNavigationBar} from 'react-native-navigation-bar-color';
import {Provider, useSelector} from 'react-redux';
import WelcomeScreen from 'screens/WelcomeScreen/WelcomeScreen';
import {store} from 'store/store';
import {selectStyleData} from 'store/styleSlice';

export type RootStackParamList = {
  Welcome: undefined;
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
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
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
