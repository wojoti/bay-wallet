import {Container} from 'components/atoms';
import {
  MarketHeader,
  MarketItem,
  MarketItemSeparator,
} from 'components/molecules';
import {PropsWithChildren} from 'react';
import {FlatList} from 'react-native';

export type MarketData = {
  id: string;
  name: string;
  value: string;
  percent: string;
};

export type MarketListProps = PropsWithChildren<{
  onViewMorePress: () => void;
  testId?: string;
  data: MarketData[];
}>;

const MarketList = ({onViewMorePress, data, testId}: MarketListProps) => (
  <Container flex={1} testId={testId}>
    <FlatList
      data={data}
      ListHeaderComponent={
        <MarketHeader
          header="Latest Market"
          buttonLabel="View more"
          onButtonPress={onViewMorePress}
          testId="marketlist-marketheader"
        />
      }
      renderItem={({item}) => (
        <MarketItem
          value={item.value}
          name={item.name}
          percent={item.percent}
          testId={'marketlist-marketitem-' + item.id}
        />
      )}
      ItemSeparatorComponent={MarketItemSeparator}
      keyExtractor={item => item.id}
      testID="marketlist-flatlist"
    />
  </Container>
);

export default MarketList;
