import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {CardsTemplate} from 'components/templates';
import {CardsData} from 'data/index';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {RootTabParamList} from 'root/App';
import {AppDispatch} from 'store/store';
import {statusBarDarkMode} from 'store/styleSlice';

export type CardsScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Cards'
>;

export interface CardsScreenProps {
  testId?: string;
}

const CardsScreen = ({testId}: CardsScreenProps) => {
  const navigation = useNavigation<CardsScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(statusBarDarkMode());
    }
  }, [dispatch, isFocused]);

  return <CardsTemplate testId={testId} data={CardsData} />;
};

export default CardsScreen;
