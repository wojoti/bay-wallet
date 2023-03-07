import {Container} from 'components/atoms';
import {
  SearchBar,
  TransactionsFilter,
  TransactionsItem,
} from 'components/molecules';
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
  onFilterPress: (id: number) => void;
  selectedId: number;
  testId?: string;
}>;

const TransactionsTemplate = ({
  onSearchChange,
  onSearchPress,
  searchValue,
  onFilterPress,
  selectedId,
  data,
  testId,
}: TransactionsTemplateProps) => {
  return (
    <Container customStyle={style.wrapper} testId={testId} align="center">
      <Container customStyle={style.spacer}>
        <SearchBar
          onChange={onSearchChange}
          onPress={onSearchPress}
          value={searchValue}
          testId="transactionstemplate-searchbar"
        />
      </Container>
      <Container customStyle={style.spacer}>
        <TransactionsFilter
          onFilterPress={onFilterPress}
          selectedId={selectedId}
        />
      </Container>
      <Container>
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
          testID="transactionstemplate-flatlist"
        />
      </Container>
    </Container>
  );
};

export default TransactionsTemplate;
