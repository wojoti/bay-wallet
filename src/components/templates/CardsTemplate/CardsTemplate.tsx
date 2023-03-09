import {Container} from 'components/atoms';
import {BankCard} from 'components/organisms';
import {PropsWithChildren} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import style from './CardsTemplate.style';

export type CardsData = {
  id: string;
  name: string;
  value: string;
  number: string;
  cardType: string;
};
export type CardsTemplateProps = PropsWithChildren<{
  data: CardsData[];
  testId?: string;
}>;

const CardsTemplate = ({data, testId}: CardsTemplateProps) => {
  return (
    <Container
      flex={1}
      customStyle={style.wrapper}
      testId={testId}
      align="stretch">
      <FlatList
        data={data}
        renderItem={({item}) => (
          <BankCard
            cardTheme={item.cardType}
            name={item.name}
            value={item.value}
            cardNumber={item.number}
          />
        )}
        keyExtractor={item => item.id}
        testID="cardstemplate-flatlist"
      />
    </Container>
  );
};

export default CardsTemplate;
