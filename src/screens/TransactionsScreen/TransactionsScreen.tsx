import {useIsFocused} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {TransactionsTemplate} from 'components/templates';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from 'store/store';
import {darkMode} from 'store/styleSlice';

export type TransactionsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Transactions'
>;

export interface TransactionsScreenProps {
  testId?: string;
}

const TransactionsScreen = ({testId}: TransactionsScreenProps) => {
  //const navigation = useNavigation<TransactionsScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(darkMode());
    }
  }, [dispatch, isFocused]);

  return <TransactionsTemplate testId={testId} />;
};

export default TransactionsScreen;
