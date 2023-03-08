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
  const [dataArray, setDataArray] = useState([
    TransactionsData,
    TransactionsData,
    TransactionsData,
  ]); //whole transactions data with button filter
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
      dataArray[filterId].filter(item => {
        if (input.length !== 0) {
          return item.clientname.toLowerCase().includes(input.toLowerCase());
        }
        return true;
      }),
    );
  };

  const filterData = (id: number) => {
    setFilteredData(dataArray[id]);
  };

  const onFilterPress = (id: number) => {
    setFilterId(id);
    filterData(id);
  };
  useEffect(() => {
    if (isFocused) {
      dispatch(statusBarDarkMode());
      setDataArray([
        TransactionsData,
        TransactionsData.filter(item => {
          return item.expense === true;
        }),
        TransactionsData.filter(item => {
          return item.expense === false;
        }),
      ]);
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
