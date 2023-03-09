import {
  Background,
  Container,
  Header,
  Img,
  ImgType,
  Label,
} from 'components/atoms';
import {GradientArea} from 'components/molecules';
import {PropsWithChildren} from 'react';
import {cardYellow} from 'theme/colors';
import style from './BankCard.style';

export type BankCardProps = PropsWithChildren<{
  testId?: string;
  cardTheme: string;
  name: string;
  value: string;
  cardNumber: string;
}>;

const BankCard = ({
  cardTheme,
  name,
  value,
  cardNumber,
  testId,
}: BankCardProps) => {
  const modifiedCardNumber =
    cardNumber.substring(0, 3) + ' ' + cardNumber.substring(3, 6) + ' ***';
  switch (cardTheme) {
    case 'purple':
      return (
        <Container customStyle={style.wrapper} align="center" testId={testId}>
          <Container customStyle={style.align}>
            <GradientArea
              colors={['#645CA1', '#C0B8FF']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Background
                source={require('img/wavecard1.png')}
                customStyle={style.wave1}
              />
              <Container flex={1} direction="row" customStyle={style.spacer}>
                <Container flex={2} justify="flex-start">
                  <Container flex={1} justify="flex-start" align="flex-start">
                    <Label color="white" testId="bankcard-name">
                      {name}
                    </Label>
                    <Header size={28} color="white" testId="bankcard-value">
                      {value}
                    </Header>
                  </Container>
                  <Container flex={1} justify="flex-end" align="flex-start">
                    <Header
                      spacing={4}
                      size={17}
                      color={cardYellow}
                      testId="bankcard-cardnumber">
                      {modifiedCardNumber}
                    </Header>
                  </Container>
                </Container>
                <Container flex={1} justify="flex-end" align="flex-end">
                  <Img
                    src={ImgType.cardlogo1}
                    height={30}
                    width={50}
                    alt={''}
                  />
                </Container>
              </Container>
            </GradientArea>
          </Container>
        </Container>
      );
    case 'green':
      return (
        <Container customStyle={style.wrapper} align="center" testId={testId}>
          <Container customStyle={style.align}>
            <GradientArea
              colors={['#44A159', '#9CEA38']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Background
                source={require('img/wavecard2.png')}
                customStyle={style.wave2}
              />
              <Container flex={1} direction="row" customStyle={style.spacer}>
                <Container flex={2} justify="flex-start">
                  <Container flex={1} justify="flex-start" align="flex-start">
                    <Label color="white" testId="bankcard-name">
                      {name}
                    </Label>
                    <Header size={28} color="white" testId="bankcard-value">
                      {value}
                    </Header>
                  </Container>
                  <Container flex={1} justify="flex-end" align="flex-start">
                    <Header
                      spacing={4}
                      size={17}
                      color={cardYellow}
                      testId="bankcard-cardnumber">
                      {modifiedCardNumber}
                    </Header>
                  </Container>
                </Container>
                <Container flex={1} justify="flex-end" align="flex-end">
                  <Img
                    src={ImgType.cardlogo2}
                    height={42}
                    width={42}
                    alt={''}
                  />
                </Container>
              </Container>
            </GradientArea>
          </Container>
        </Container>
      );
    case 'pink':
      return (
        <Container customStyle={style.wrapper} align="center" testId={testId}>
          <Container customStyle={style.align}>
            <GradientArea
              colors={['#DA1CC7', '#FFC785']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Background
                source={require('img/wavecard3.png')}
                customStyle={style.wave3}
              />
              <Container flex={1} direction="row" customStyle={style.spacer}>
                <Container flex={2} justify="flex-start">
                  <Container flex={1} justify="flex-start" align="flex-start">
                    <Label color="white" testId="bankcard-name">
                      {name}
                    </Label>
                    <Header size={28} color="white" testId="bankcard-value">
                      {value}
                    </Header>
                  </Container>
                  <Container flex={1} justify="flex-end" align="flex-start">
                    <Header
                      spacing={4}
                      size={17}
                      color={cardYellow}
                      testId="bankcard-cardnumber">
                      {modifiedCardNumber}
                    </Header>
                  </Container>
                </Container>
                <Container flex={1} justify="flex-end" align="flex-end">
                  <Img
                    src={ImgType.cardlogo3}
                    height={37}
                    width={19.5}
                    alt={''}
                  />
                </Container>
              </Container>
            </GradientArea>
          </Container>
        </Container>
      );
    case 'darkPurple':
      return (
        <Container customStyle={style.wrapper} align="center" testId={testId}>
          <Container customStyle={style.align}>
            <GradientArea
              colors={['#3e3b53', '#7c77a2']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Background
                source={require('img/wavecard1.png')}
                customStyle={style.wave1}
              />
              <Container flex={1} direction="row" customStyle={style.spacer}>
                <Container flex={2} justify="flex-start">
                  <Container flex={1} justify="flex-start" align="flex-start">
                    <Label color="white" testId="bankcard-name">
                      {name}
                    </Label>
                    <Header size={28} color="white" testId="bankcard-value">
                      {value}
                    </Header>
                  </Container>
                  <Container flex={1} justify="flex-end" align="flex-start">
                    <Header
                      spacing={4}
                      size={17}
                      color={cardYellow}
                      testId="bankcard-cardnumber">
                      {modifiedCardNumber}
                    </Header>
                  </Container>
                </Container>
                <Container flex={1} justify="flex-end" align="flex-end">
                  <Img
                    src={ImgType.cardlogo1}
                    height={30}
                    width={50}
                    alt={''}
                  />
                </Container>
              </Container>
            </GradientArea>
          </Container>
        </Container>
      );
    default:
      return (
        <Container customStyle={style.wrapper} align="center" testId={testId}>
          <Container customStyle={style.align}>
            <GradientArea
              colors={['#3e3b53', '#7c77a2']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Background
                source={require('img/wavecard1.png')}
                customStyle={style.wave1}
              />
              <Container flex={1} direction="row" customStyle={style.spacer}>
                <Container flex={2} justify="flex-start">
                  <Container flex={1} justify="flex-start" align="flex-start">
                    <Label color="white" testId="bankcard-name">
                      {name}
                    </Label>
                    <Header size={30} color="white" testId="bankcard-value">
                      {value}
                    </Header>
                  </Container>
                  <Container flex={1} justify="flex-end" align="flex-start">
                    <Header
                      spacing={4}
                      size={17}
                      color={cardYellow}
                      testId="bankcard-cardnumber">
                      {modifiedCardNumber}
                    </Header>
                  </Container>
                </Container>
                <Container flex={1} justify="flex-end" align="flex-end">
                  <Img
                    src={ImgType.cardlogo1}
                    height={30}
                    width={50}
                    alt={''}
                  />
                </Container>
              </Container>
            </GradientArea>
          </Container>
        </Container>
      );
  }
};

export default BankCard;
