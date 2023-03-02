import {
  Background,
  Button,
  Container,
  Header,
  Img,
  ImgType,
  Label,
} from 'components/atoms';
import {PropsWithChildren} from 'react';
import {darkGrey, green} from 'theme/colors';
import style from './BalanceBox.style';

export type BalanceBoxProps = PropsWithChildren<{
  onDetailsPress: () => void;
  testId?: string;
  amount: string;
  percent: string;
  balanceLabel: string;
  detailsLabel: string;
}>;

const BalanceBox = ({
  onDetailsPress,
  amount,
  percent,
  balanceLabel,
  detailsLabel,
  testId,
}: BalanceBoxProps) => {
  return (
    <Container customStyle={style.balanceBox} testId={testId}>
      <Container customStyle={style.backgroundBox} />
      <Container customStyle={style.whiteBox}>
        <Background
          source={require('img/wave.png')}
          customStyle={style.imgBackground}
          testId={'balancebox-background'}>
          <Container flex={1} justify="space-between">
            <Label size={15} color={darkGrey} testId={'balancebox-label'}>
              {balanceLabel}
            </Label>
            <Header size={28} testId={'balancebox-amount'}>
              $ {amount}
            </Header>
          </Container>
          <Container
            flex={1}
            align="flex-end"
            justify="space-between"
            direction="row">
            <Button
              customStyle={style.btnStyle}
              customFontStyle={style.btnTextStyle}
              onPress={onDetailsPress}
              testId={'balancebox-button'}>
              {detailsLabel}
            </Button>
            <Container
              customStyle={style.width}
              direction="row"
              align="flex-start"
              justify="space-between">
              <Header size={15} color={green} testId={'balancebox-percent'}>
                {percent} %
              </Header>
              <Img
                src={ImgType.waveGreen}
                height={'20'}
                width={41}
                alt={''}
                testId={'balancebox-wave'}
              />
            </Container>
          </Container>
        </Background>
      </Container>
    </Container>
  );
};

export default BalanceBox;
