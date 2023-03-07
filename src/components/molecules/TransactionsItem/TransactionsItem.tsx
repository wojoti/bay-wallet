import {Container, Header, Img, ImgType, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import {green, grey, marketDarkGrey, red} from 'theme/colors';
import style from './TransactionsItem.style';

export type TransactionsItemProps = PropsWithChildren<{
  expense: boolean;
  category: string;
  clientname: string;
  value: string;
  date: string;
  testId?: string;
}>;

const TransactionsItem = ({
  expense,
  category,
  clientname,
  value,
  date,
  testId,
}: TransactionsItemProps) => {
  const detailColor = expense ? red : green;
  return (
    <Container
      testId={testId}
      direction="row"
      align="center"
      justify="space-between"
      customStyle={style.wrapper}>
      <Container flex={4} direction="row" align="center">
        <Container customStyle={style.logobox}>
          <Img
            src={ImgType.bitcoin}
            height="21"
            alt="bitcoin logo"
            testId="transactionsitem-img"
          />
        </Container>
        <Container justify="center" align="flex-start">
          <Label
            color={marketDarkGrey}
            size={14}
            testId="transactionsitem-category">
            {category}
          </Label>
          <Header color="black" size={16} testId="transactionsitem-clientname">
            {clientname}
          </Header>
        </Container>
      </Container>
      <Container flex={1} justify="center" align="flex-end">
        <Header size={16} color={detailColor} testId="transactionsitem-value">
          {value}
        </Header>
        <Label size={14} color={grey} testId="transactionsitem-date">
          {date}
        </Label>
      </Container>
    </Container>
  );
};

export default TransactionsItem;
