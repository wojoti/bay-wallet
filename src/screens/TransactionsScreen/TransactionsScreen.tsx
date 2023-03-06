import {useIsFocused} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {TransactionsTemplate} from 'components/templates';
import {TransactionsData} from 'data/index';
import {useEffect, useState} from 'react';
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
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState(TransactionsData);
  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };
  const onSearchPress = () => {
    setData(
      TransactionsData.filter(item => {
        if (searchValue.length !== 0)
          return item.clientname
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        return true;
      }).map(({id, expense, category, clientname, value, date}) => ({
        id,
        expense,
        category,
        clientname,
        value,
        date,
      })),
    );
  };

  useEffect(() => {
    if (isFocused) {
      dispatch(darkMode());
    }
  }, [dispatch, isFocused]);

  return (
    <TransactionsTemplate
      testId={'transactionsscreen-transactionstemplate'}
      onSearchChange={onSearchChange}
      onSearchPress={onSearchPress}
      searchValue={searchValue}
      data={data}
    />
  );
};

export default TransactionsScreen;
