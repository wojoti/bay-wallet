import {Container, Label} from 'components/atoms';
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
    <Container customStyle={style.wrapper} testId={testId} align="center">
      <Label>CardsTemplate</Label>
      <FlatList data={data} renderItem={undefined} />
    </Container>
  );
};

export default CardsTemplate;
