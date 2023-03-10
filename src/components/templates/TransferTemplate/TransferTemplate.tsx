import {Container, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import style from './TransferTemplate.style';

export type TransferTemplateProps = PropsWithChildren<{
  testId?: string;
}>;

const TransferTemplate = ({testId}: TransferTemplateProps) => {
  return (
    <Container customStyle={style.wrapper} testId={testId}>
      <Label>Placeholder</Label>
    </Container>
  );
};

export default TransferTemplate;
