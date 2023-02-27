import {Container, Header, Img, ImgType, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import {grey, lime, marketDarkGrey, red} from 'theme/colors';
import style from './MarketItem.style';

export type MarketItemProps = PropsWithChildren<{
  value: string;
  name: string;
  percent: string;
  testId?: string;
}>;

const MarketItem = ({value, name, percent, testId}: MarketItemProps) => {
  const detailColor = percent.startsWith('-') ? red : lime;
  const isDown = percent.startsWith('-');
  return (
    <Container
      testId={testId}
      direction="row"
      align="center"
      justify="space-between"
      customStyle={style.wrapper}>
      <Container flex={5} direction={'row'} align="center">
        <Container customStyle={style.circle}>
          <Img src={ImgType.bitcoin} height={'20'} alt={'bitcoin logo'} />
        </Container>
        <Container justify="center" align="flex-start">
          <Header color={marketDarkGrey} size={20}>
            $ {value}
          </Header>
          <Label color={grey} size={12}>
            {name}
          </Label>
        </Container>
      </Container>
      <Container flex={1} direction={'row'} justify="flex-end" align="center">
        <Container customStyle={{width: 'auto', marginRight: 10}}>
          <Header size={14} color={detailColor}>
            {percent}%
          </Header>
        </Container>
        {isDown ? (
          <Img src={ImgType.dashDown} height={'12'} width={12} alt={''} />
        ) : (
          <Img src={ImgType.dashUp} height={'12'} width={12} alt={''} />
        )}
      </Container>
    </Container>
  );
};

export default MarketItem;
