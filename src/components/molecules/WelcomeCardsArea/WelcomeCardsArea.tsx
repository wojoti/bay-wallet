import {Button, Container, Header, Img, ImgType, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import {buttonTextStyle} from 'theme/button';
import style from './WelcomeCardsArea.style';

export type WelcomeCardsAreaProps = PropsWithChildren<{
  onButtonPress: () => void;
  mainText: string;
  cardText: string;
  buttonText: string;
  testId?: string;
}>;

const WelcomeCardsArea = ({
  onButtonPress,
  mainText,
  cardText,
  buttonText,
  testId,
}: WelcomeCardsAreaProps) => {
  return (
    <Container flex={1} customStyle={style.wrapper} testId={testId}>
      <Container
        flex={1}
        customStyle={style.cardSizer}
        testId={'welcomecardsarea-card'}>
        <Container
          direction="row"
          justify="space-between"
          customStyle={style.topSpacer}>
          <Container customStyle={style.headerSizer}>
            <Header size={40} testId={'welcomecardsarea-header'}>
              {mainText}
            </Header>
          </Container>
          <Container customStyle={style.logoSizer}>
            <Img
              src={ImgType.logo}
              height={60}
              width={60}
              alt={''}
              testId={'welcomecardsarea-logo'}
            />
          </Container>
        </Container>
        <Container customStyle={style.labelSpacer}>
          <Label size={14} testId={'welcomecardsarea-label'}>
            {cardText}
          </Label>
        </Container>
        <Container align="flex-end" customStyle={style.buttonSpacer}>
          <Button
            customStyle={style.btnStyle}
            customFontStyle={buttonTextStyle.secondary}
            onPress={onButtonPress}
            testId={'welcomecardsarea-button'}>
            {buttonText}
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default WelcomeCardsArea;
