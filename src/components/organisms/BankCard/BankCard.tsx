import {Container, Header, Img, ImgType, Label} from 'components/atoms';
import {GradientArea} from 'components/molecules';
import {PropsWithChildren} from 'react';
import {cardYellow, lightPrimary, primary} from 'theme/colors';
import style from './BankCard.style';

export type BankCardProps = PropsWithChildren<{
  testId?: string;
  cardTheme: 'green' | 'purple' | 'pink' | 'darkPurple' | 'default';
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
  const colors =
    cardTheme === 'purple'
      ? ['#645CA1', '#C0B8FF']
      : cardTheme === 'green'
      ? ['#44A159', '#9CEA38']
      : cardTheme === 'pink'
      ? ['#DA1CC7', '#FFC785']
      : cardTheme === 'darkPurple'
      ? ['#3e3b53', '#7c77a2']
      : [primary, lightPrimary];

  return (
    <Container customStyle={style.wrapper} testId={testId}>
      <GradientArea
        colors={
          cardTheme === 'purple'
            ? ['#645CA1', '#C0B8FF']
            : cardTheme === 'green'
            ? ['#44A159', '#9CEA38']
            : cardTheme === 'pink'
            ? ['#DA1CC7', '#FFC785']
            : cardTheme === 'darkPurple'
            ? ['#3e3b53', '#7c77a2']
            : [primary, lightPrimary]
        }
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
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
            {cardTheme === 'purple' ? (
              <Img src={ImgType.cardlogo1} height={30} width={50} alt={''} />
            ) : cardTheme === 'green' ? (
              <Img src={ImgType.cardlogo2} height={42} width={42} alt={''} />
            ) : cardTheme === 'pink' ? (
              <Img src={ImgType.cardlogo3} height={37} width={19.5} alt={''} />
            ) : (
              <Img src={ImgType.cardlogo1} height={30} width={50} alt={''} />
            )}
          </Container>
        </Container>
      </GradientArea>
    </Container>
  );
};

export default BankCard;
