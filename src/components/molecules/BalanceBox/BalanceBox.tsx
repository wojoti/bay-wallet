import {Button, Container, Header, Img, ImgType, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import {ImageBackground} from 'react-native';
import {darkGrey, green, primary} from 'theme/colors';
import style from './BalanceBox.style';

export type BalanceBoxProps = PropsWithChildren<{
  onDetailsPress: () => void;
  testId?: string;
  amount: string;
}>;

const BalanceBox = ({onDetailsPress, amount, testId}: BalanceBoxProps) => {
  return (
    <Container customStyle={style.balanceBox} testId={testId}>
      <Container customStyle={style.backgroundBox} />
      <Container customStyle={style.whiteBox}>
        <ImageBackground
          source={require('img/wave.png')}
          style={style.imgBackground}>
          <Container flex={1} justify="space-between">
            <Label size={15} color={darkGrey}>
              Your main balance
            </Label>
            <Header size={28}>$ {amount}</Header>
          </Container>
          <Container
            flex={1}
            align="flex-end"
            justify="space-between"
            direction="row">
            <Button
              height={30}
              fontColor={primary}
              fontSize={15}
              fontWeight="normal"
              color={'transparent'}
              borderColor={'transparent'}
              onPress={onDetailsPress}
              testId={'balancebox-button'}>
              Details {'>'}
            </Button>
            <Container
              customStyle={style.width}
              direction="row"
              align="flex-start"
              justify="space-between">
              <Header size={15} color={green}>
                4.5%
              </Header>
              <Img src={ImgType.waveGreen} height={'20'} width={41} alt={''} />
            </Container>
          </Container>
        </ImageBackground>
      </Container>
    </Container>
  );
};

export default BalanceBox;
