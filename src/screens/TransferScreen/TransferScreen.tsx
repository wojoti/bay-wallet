import {useIsFocused} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {TransferTemplate} from 'components/templates';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from 'store/store';
import {statusBarDarkMode} from 'store/styleSlice';

export type TransferScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Transfer'
>;

export interface TransferScreenProps {
  testId?: string;
}

const TransferScreen = ({testId}: TransferScreenProps) => {
  // const navigation = useNavigation<TransferScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(statusBarDarkMode());
    }
  }, [dispatch, isFocused]);

  return <TransferTemplate testId={testId} />;
};

export default TransferScreen;
