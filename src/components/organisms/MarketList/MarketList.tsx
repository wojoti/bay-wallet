import {Container} from 'components/atoms';
import {MarketItem} from 'components/molecules';
import {MarketData} from 'data/index';
import {PropsWithChildren} from 'react';
import {FlatList} from 'react-native';

export type MarketListProps = PropsWithChildren<{
  onViewMorePress: () => void;
  testId?: string;
}>;

const MarketList = ({onViewMorePress, testId}: MarketListProps) => (
  <Container flex={1} testId={testId}>
    <FlatList
      data={MarketData}
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
