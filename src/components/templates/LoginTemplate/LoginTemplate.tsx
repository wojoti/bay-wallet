import {Container, Img, ImgType} from 'components/atoms';
import {PropsWithChildren} from 'react';
import style from './LoginTemplate.style';

export type LoginTemplateProps = PropsWithChildren<{
  onLoginButtonPress: () => void;
  onResetButtonPress: () => void;
  onSocialLoginPress: (icon: string) => void;
  testId?: string;
}>;

const LoginTemplate = ({
  onLoginButtonPress,
  onResetButtonPress,
  onSocialLoginPress,
  testId,
}: LoginTemplateProps) => {
  const onSocialPress = () => {
    onSocialLoginPress('test');
  };
  return (
    <Container testId={testId} customStyle={style.wrapper}>
      <Container
        flex={1}
        justify="center"
        align="center"
        customStyle={style.sizer}
        testId={testId}>
        <Container flex={1} justify="flex-end">
          <Img
            src={ImgType.logoSplashWhite}
            height={330}
            alt={''}
            testId={'logintemplate-img'}
          />
        </Container>
      </Container>
      {/* <Button onPress={onLoginButtonPress} type={'primary'}>
        Login
      </Button>
      <Button onPress={onResetButtonPress} type={'secondary'}>
        Reset
      </Button>
      <Button onPress={onSocialPress} type={'tertiary'}>
        Socials
      </Button> */}
    </Container>
  );
};

export default LoginTemplate;
