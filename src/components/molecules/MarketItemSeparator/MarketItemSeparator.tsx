import {Container} from 'components/atoms';
import {PropsWithChildren} from 'react';
import style from './MarketItemSeparator.style';

export type MarketItemSeparatorProps = PropsWithChildren<{
  testId?: string;
}>;

const MarketItemSeparator = ({testId}: MarketItemSeparatorProps) => {
  return (
    <Container testId={testId} justify="center" align="center">
      <Container customStyle={style.wrapper} />
    </Container>
  );
};

export default MarketItemSeparator;
