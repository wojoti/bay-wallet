import {useIsFocused} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {MainTemplate} from 'components/templates';
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

  return <MainTemplate testId={testId} />;
};

export default MainScreen;
