import {Button, Container, Header, Img, ImgType, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';

export type CardWelcomeProps = PropsWithChildren<{
  onButtonPress: () => void;
  mainColor: string;
  cardColor: string;
  mainText: string;
  cardText: string;
}>;

const CardWelcome = ({
  onButtonPress,
  mainColor,
  cardColor,
  mainText,
  cardText,
}: CardWelcomeProps) => {
  return (
    <Container flex={1} justify="center" align="center" background={mainColor}>
      <Container flex={1} background={mainColor} justify="flex-end">
        <Img src={ImgType.cardLock} height={330} alt={''} />
      </Container>
      <Container
        flex={1}
        background={cardColor}
        radius={45}
        mb={-50}
        align="center">
        <Container flex={1} width={'85%'}>
          <Container direction="row" justify="space-between" mt={50}>
            <Container width="78%">
              <Header size={40}>{mainText}</Header>
            </Container>
            <Container width="auto">
              <Img src={ImgType.logo} height={60} width={60} alt={''} />
            </Container>
          </Container>
          <Container mt={20}>
            <Label size={14}>{cardText}</Label>
          </Container>
          <Container align="flex-end" mt={30}>
            <Button onPress={onButtonPress} type={'simple'}>
              GET STARTED
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default CardWelcome;
