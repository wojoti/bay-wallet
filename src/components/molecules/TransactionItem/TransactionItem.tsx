import {Container, Header, Img, ImgType, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import {green, grey, marketDarkGrey, red} from 'theme/colors';
import style from './TransactionItem.style';

export type TransactionItemProps = PropsWithChildren<{
  expense: boolean;
  category: string;
  clientname: string;
  value: string;
  date: string;
  testId?: string;
}>;

const TransactionItem = ({
  expense,
  category,
  clientname,
  value,
  date,
  testId,
}: TransactionItemProps) => {
  const detailColor = expense ? red : green;
  return (
    <Container
      testId={testId}
      direction="row"
      align="center"
      justify="space-between"
      customStyle={style.wrapper}>
      <Container flex={4} direction={'row'} align="center">
        <Container customStyle={style.logobox}>
          <Img
            src={ImgType.bitcoin}
            height={'21'}
            alt={'bitcoin logo'}
            testId={'transactionitem-img'}
          />
        </Container>
        <Container justify="center" align="flex-start">
          <Label
            color={marketDarkGrey}
            size={14}
            testId={'transactionitem-category'}>
            {category}
          </Label>
          <Header
            color={'black'}
            size={16}
            testId={'transactionitem-clientname'}>
            {clientname}
          </Header>
        </Container>
      </Container>
      <Container flex={1} justify="center" align="flex-end">
        <Header size={16} color={detailColor} testId={'transactionitem-value'}>
          {value}
        </Header>
        <Label size={14} color={grey} testId={'transactionitem-date'}>
          {date}
        </Label>
      </Container>
    </Container>
  );
};

export default TransactionItem;
