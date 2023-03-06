import {Container} from 'components/atoms';
import {TransactionItem} from 'components/molecules';
import {TransactionsData} from 'data/index';
import {PropsWithChildren} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import style from './TransactionsTemplate.style';

export type TransactionsTemplateProps = PropsWithChildren<{
  testId?: string;
}>;

const TransactionsTemplate = ({testId}: TransactionsTemplateProps) => {
  return (
    <Container customStyle={style.wrapper} testId={testId}>
      <Container flex={1}>
        <FlatList
          data={TransactionsData}
          //   ListHeaderComponent={
          //     <MarketHeader
          //       header={'Latest Market'}
          //       buttonLabel={'View more'}
          //       onButtonPress={onViewMorePress}
          //       testId="marketlist-marketheader"
          //     />
          //   }
          renderItem={({item}) => (
            <TransactionItem
              testId={'transactionslist-transactionitem-' + item.id}
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
