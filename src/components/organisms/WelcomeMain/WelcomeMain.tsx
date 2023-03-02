import {Button, Container, Header, Img, ImgType, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import {secondary} from 'theme/colors';
import style from './WelcomeMain.style';

export type WelcomeMainProps = PropsWithChildren<{
  onButtonPress: () => void;
  testId?: string;
}>;

const Welcomemain = ({onButtonPress, testId}: WelcomeMainProps) => {
  return (
    <Container
      flex={1}
      justify="center"
      align="center"
      customStyle={style.wrapper}
      testId={testId}>
      <Container flex={1} justify="flex-end">
        <Img
          src={ImgType.logoSplashColor}
          height={330}
          alt={''}
          testId={'welcomemain-img'}
        />
      </Container>
      <Container flex={1.1} align="center" customStyle={style.content}>
        <Container align="center" flex={2.6}>
          <Label color={secondary} size={30} testId={'welcomemain-label'}>
            Welcome to,
          </Label>
          <Header color={secondary} size={50} testId={'welcomemain-header'}>
            BayWallet
          </Header>
          <Label
            color={secondary}
            size={14}
            align="center"
            testId={'welcomemain-description'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Label>
        </Container>
        <Container flex={1}>
          <Button
            customStyle={style.btnStyle}
            customFontStyle={style.btnTextStyle}
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
