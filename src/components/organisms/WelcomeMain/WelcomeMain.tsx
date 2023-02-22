import {Button, Container, Header, Img, ImgType, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import style from './WelcomeMain.style';

export type WelcomeMainProps = PropsWithChildren<{
  onButtonPress: () => void;
  mainColor: string;
  accentColor: string;
  testId?: string;
}>;

const Welcomemain = ({
  onButtonPress,
  mainColor,
  accentColor,
  testId,
}: WelcomeMainProps) => {
  return (
    <Container
      flex={1}
      justify="center"
      align="center"
      customStyle={style({mainColor}).wrapper}
      testId={testId}>
      <Container flex={1} justify="flex-end">
        <Img
          src={ImgType.logoSplashColor}
          height={330}
          alt={''}
          testId={'welcomemain-img'}
        />
      </Container>
      <Container flex={1.1} align="center" customStyle={style({}).content}>
        <Container align="center" flex={2.6}>
          <Label color={accentColor} size={30} testId={'welcomemain-label'}>
            Welcome to,
          </Label>
          <Header color={accentColor} size={50} testId={'welcomemain-header'}>
            BayWallet
          </Header>
          <Label
            color={accentColor}
            size={14}
            align="center"
            testId={'welcomemain-description'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Label>
        </Container>
        <Container flex={1}>
          <Button
            type="tertiary"
            onPress={onButtonPress}
            testId={'welcomemain-button'}>
            GET STARTED
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Welcomemain;
