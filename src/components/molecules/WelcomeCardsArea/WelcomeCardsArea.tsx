import {Button, Container, Header, Img, ImgType, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import style from './WelcomeCardsArea.style';

export type WelcomeCardsAreaProps = PropsWithChildren<{
  onButtonPress: () => void;
  mainText: string;
  cardText: string;
  testId?: string;
}>;

const WelcomeCardsArea = ({
  onButtonPress,
  mainText,
  cardText,
  testId,
}: WelcomeCardsAreaProps) => {
  return (
    <Container flex={1} customStyle={style({}).cardSizer} testId={testId}>
      <Container
        flex={1}
        customStyle={style({width: '85%'}).sizer}
        testId={'welcomecardsarea-card'}>
        <Container
          direction="row"
          justify="space-between"
          customStyle={style({mt: 50}).sizer}>
          <Container customStyle={style({width: '78%'}).sizer}>
            <Header size={40} testId={'welcomecardsarea-header'}>
              {mainText}
            </Header>
          </Container>
          <Container customStyle={style({width: 'auto'}).sizer}>
            <Img
              src={ImgType.logo}
              height={60}
              width={60}
              alt={''}
              testId={'welcomecardsarea-logo'}
            />
          </Container>
        </Container>
        <Container customStyle={style({mt: 20}).sizer}>
          <Label size={14} testId={'welcomecardsarea-label'}>
            {cardText}
          </Label>
        </Container>
        <Container align="flex-end" customStyle={style({mt: 30}).sizer}>
          <Button
            onPress={onButtonPress}
            type={'tertiary-alternative'}
            testId={'welcomecardsarea-button'}>
            GET STARTED
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default WelcomeCardsArea;
