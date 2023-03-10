import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {MainTemplate} from 'components/templates';
import {MarketData} from 'data/index';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {RootTabParamList} from 'root/App';
import {AppDispatch} from 'store/store';
import {statusBarLightMode} from 'store/styleSlice';

export type MainScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Main'
>;

export interface MainScreenProps {
  testId?: string;
}

const MainScreen = ({testId}: MainScreenProps) => {
  const navigation = useNavigation<MainScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(statusBarLightMode());
    }
  }, [dispatch, isFocused]);

  const onNotificationPress = () => {
    console.log('onNotificationPress');
  };
  const onUserProfilePress = () => {
    console.log('onUserProfilePress');
  };
  const onDetailsPress = () => {
    console.log('onDetailsPress');
  };
  const onTransferPress = () => {
    navigation.getParent()?.navigate('Transfer');
  };
  const onWithdrawPress = () => {
    console.log('onWithdrawPress');
  };
  const onViewMorePress = () => {
    navigation.getParent()?.navigate('Transactions');
  };

  return (
    <MainTemplate
      testId={testId}
      onNotificationPress={onNotificationPress}
      onUserProfilePress={onUserProfilePress}
      onDetailsPress={onDetailsPress}
      onTransferPress={onTransferPress}
      onWithdrawPress={onWithdrawPress}
      onViewMorePress={onViewMorePress}
      data={MarketData}
    />
  );
};

export default MainScreen;
