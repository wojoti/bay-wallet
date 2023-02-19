import {Button, Container, Header, Img, ImgType, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';

export type MainWelcomeProps = PropsWithChildren<{
  onButtonPress: () => void;
  mainColor: string;
  accentColor: string;
}>;

const MainWelcome = ({
  onButtonPress,
  mainColor,
  accentColor,
}: MainWelcomeProps) => {
  return (
    <Container flex={1} justify="center" align="center" background={mainColor}>
      <Container flex={8} justify="flex-end">
        <Img src={ImgType.logoSplashColor} height={330} alt={''} />
      </Container>
      <Container flex={9} align="center" width="85%">
        <Container align="center" flex={8}>
          <Label color={accentColor} size={30}>
            Welcome to,
          </Label>
          <Header color={accentColor} size={50}>
            BayWallet
          </Header>
          <Label color={accentColor} size={14} align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Label>
        </Container>
        <Container flex={3}>
          <Button type="white" onPress={onButtonPress}>
            GET STARTED
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default MainWelcome;
