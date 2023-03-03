import {useIsFocused} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {MainTemplate} from 'components/templates';
import {MarketData} from 'data/index';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from 'store/store';
import {lightMode} from 'store/styleSlice';

export type MainScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Main'
>;

export interface MainScreenProps {
  testId?: string;
}

const MainScreen = ({testId}: MainScreenProps) => {
  //const navigation = useNavigation<MainScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(lightMode());
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
    console.log('onTransferPress');
  };
  const onWithdrawPress = () => {
    console.log('onWithdrawPress');
  };
  const onViewMorePress = () => {
    console.log('onViewMorePress');
  };
  const onCardPress = () => {
    console.log('onCardPress');
  };
  const onMenuPress = () => {
    console.log('onMenuPress');
  };
  const onChartPress = () => {
    console.log('onChartPress');
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
      onCardPress={onCardPress}
      onMenuPress={onMenuPress}
      onChartPress={onChartPress}
    />
  );
};

export default MainScreen;
