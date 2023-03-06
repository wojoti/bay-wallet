import {Container, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import style from './TransactionsTemplate.style';

export type TransactionsTemplateProps = PropsWithChildren<{
  testId?: string;
}>;

const TransactionsTemplate = ({testId}: TransactionsTemplateProps) => {
  return (
    <Container customStyle={style.wrapper} testId={testId}>
      <Label>test</Label>
    </Container>
  );
};

export default TransactionsTemplate;
