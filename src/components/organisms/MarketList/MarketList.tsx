import {Container} from 'components/atoms';
import {MarketHeader, MarketItem} from 'components/molecules';
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
          header={'Latest Market'}
          buttonLabel={'View more'}
          onButtonPress={onViewMorePress}
        />
      }
      renderItem={({item}) => (
        <MarketItem
          value={item.value}
          name={item.name}
          percent={item.percent}
        />
      )}
      keyExtractor={item => item.id}
    />
  </Container>
);

export default MarketList;
