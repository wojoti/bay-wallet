import {Container, EmptyButton, Img, ImgType} from 'components/atoms';
import {PropsWithChildren} from 'react';
import {borderGrey, secondary} from 'theme/colors';
import style from './SocialLoginButtons.style';

export type SocialLoginButtonsProps = PropsWithChildren<{
  onIconPress: (origin: string) => void;
  testId?: string;
}>;

const SocialLoginButtons = ({onIconPress, testId}: SocialLoginButtonsProps) => {
  const onPressF = () => {
    onIconPress('facebook');
  };
  const onPressG = () => {
    onIconPress('google');
  };
  return (
    <Container
      direction="row"
      justify="space-between"
      align="flex-start"
      testId={testId}>
      <Container customStyle={style.width}>
        <EmptyButton
          color={secondary}
          borderColor={borderGrey}
          onPress={onPressG}
          testId="socialloginbuttons-button-google">
          <Img
            src={ImgType.google}
            height={'25'}
            alt={'google login'}
            testId="img-google"
          />
        </EmptyButton>
      </Container>
      <Container customStyle={style.width}>
        <EmptyButton
          color={secondary}
          borderColor={borderGrey}
          onPress={onPressF}
          testId="socialloginbuttons-button-facebook">
          <Img
            src={ImgType.facebook}
            height={'25'}
            alt={'facebook login'}
            testId="img-facebook"
          />
        </EmptyButton>
      </Container>
    </Container>
  );
};

export default SocialLoginButtons;
