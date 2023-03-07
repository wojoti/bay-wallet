import {useIsFocused} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {TransactionsTemplate} from 'components/templates';
import {TransactionsData} from 'data/index';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from 'store/store';
import {statusBarDarkMode} from 'store/styleSlice';

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
  const [filterId, setFilterId] = useState(0);
  const [data, setData] = useState(TransactionsData); //whole transactions data with button filter
  const [filteredData, setFilteredData] = useState(TransactionsData); //filtered by button + text

  const onSearchChange = (value: string) => {
    setSearchValue(value);
    filterDataWithText(value);
  };
  const onSearchPress = () => {
    filterDataWithText(searchValue);
  };

  const filterDataWithText = (input: string) => {
    setFilteredData(
      data.filter(item => {
        if (input.length !== 0) {
          return item.clientname.toLowerCase().includes(input.toLowerCase());
        }
        return true;
      }),
    );
  };

  const filterData = (id: number) => {
    setData(
      TransactionsData.filter(item => {
        if (id) {
          if (id === 1) {
            return item.expense === true;
          }
          return item.expense === false;
        }
        return true;
      }),
    );
    setFilteredData(
      TransactionsData.filter(item => {
        if (id) {
          if (id === 1) {
            return item.expense === true;
          }
          return item.expense === false;
        }
        return true;
      }),
    );
  };

  const onFilterPress = (id: number) => {
    setFilterId(id);
    filterData(id);
  };

  useEffect(() => {
    if (isFocused) {
      dispatch(statusBarDarkMode());
    }
  }, [dispatch, isFocused]);

  return (
    <TransactionsTemplate
      testId={testId}
      onSearchChange={onSearchChange}
      onSearchPress={onSearchPress}
      searchValue={searchValue}
      data={filteredData}
      onFilterPress={onFilterPress}
      selectedId={filterId}
    />
  );
};

export default TransactionsScreen;
