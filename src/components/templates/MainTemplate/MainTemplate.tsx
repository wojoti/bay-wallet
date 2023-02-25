import {Container, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';

export type MainTemplateProps = PropsWithChildren<{
  testId?: string;
}>;

const MainTemplate = ({testId}: MainTemplateProps) => {
  return (
    <Container testId={testId}>
      <Label>Main Template</Label>
    </Container>
  );
};

export default MainTemplate;
