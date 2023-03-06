import {Container} from 'components/atoms';
import {TransactionsItem, TransactionsSearchBar} from 'components/molecules';
import {TransactionsData} from 'data/index';
import {PropsWithChildren} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import style from './TransactionsTemplate.style';

export type TransactionsData = {
  id: string;
  expense: boolean;
  category: string;
  clientname: string;
  value: string;
  date: string;
};
export type TransactionsTemplateProps = PropsWithChildren<{
  onSearchChange: (value: string) => void;
  onSearchPress: () => void;
  searchValue: string;
  data: TransactionsData[];
  testId?: string;
}>;

const TransactionsTemplate = ({
  onSearchChange,
  onSearchPress,
  searchValue,
  data,
  testId,
}: TransactionsTemplateProps) => {
  return (
    <Container customStyle={style.wrapper} testId={testId} align="center">
      <Container flex={1} customStyle={style.searchBarWrapper}>
        <TransactionsSearchBar
          onChange={onSearchChange}
          onPress={onSearchPress}
          value={searchValue}
        />
      </Container>
      <Container flex={6}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TransactionsItem
              testId={'transactionslist-transactionsitem-' + item.id}
              expense={item.expense}
              category={item.category}
              clientname={item.clientname}
              value={item.value}
              date={item.date}
            />
          )}
          keyExtractor={item => item.id}
          testID="transactions-flatlist"
        />
      </Container>
    </Container>
  );
};

export default TransactionsTemplate;
