import {Container, Img, ImgType} from 'components/atoms';
import {LoginForm} from 'components/organisms';
import {PropsWithChildren} from 'react';
import style from './LoginTemplate.style';

export type LoginTemplateProps = PropsWithChildren<{
  onLoginSubmit: (username: string, password: string) => void;
  onPasswordReset: () => void;
  onSocialLoginPress: (icon: string) => void;
  testId?: string;
}>;

const LoginTemplate = ({
  onLoginSubmit,
  onPasswordReset,
  onSocialLoginPress,
  testId,
}: LoginTemplateProps) => {
  const onSocialPress = () => {
    onSocialLoginPress(
      'beda 2 funkcje od fejsa i googla - poki co nie mam komponentow',
    );
  };
  return (
    <Container testId={testId} customStyle={style.wrapper}>
      <Container flex={1} justify="center" align="center">
        <Container flex={1} justify="flex-end">
          <Img
            src={ImgType.logoSplashWhite}
            height={230}
            alt={''}
            testId={'logintemplate-img'}
          />
        </Container>
        <Container flex={2} customStyle={style.sizer}>
          <LoginForm
            onLoginSubmit={onLoginSubmit}
            onPasswordReset={onPasswordReset}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default LoginTemplate;
