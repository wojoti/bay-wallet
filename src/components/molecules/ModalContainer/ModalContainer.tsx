import {Button, Container, Header, Img, ImgType, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import {grey} from 'theme/colors';
import style from './ModalContainer.style';

export type ModalContainerProps = PropsWithChildren<{
  onPress: () => void;
  header: string;
  description: string;
  buttonText: string;
  testId?: string;
}>;

const ModalContainer = ({
  onPress,
  header,
  description,
  buttonText,
  testId,
}: ModalContainerProps) => {
  return (
    <Container
      flex={1}
      customStyle={style.wrapper}
      testId={testId}
      align="center"
      justify="center">
      <Container customStyle={style.box} align="center">
        <Container align="center" customStyle={style.spacer}>
          <Header testId="modalcontainer-header">{header}</Header>
        </Container>

        <Label testId="modalcontainer-label" color={grey}>
          {description}
        </Label>
        <Container customStyle={style.circle} justify="center" align="center">
          <Img
            testId="modalcontainer-img"
            src={ImgType.success}
            height={25}
            width={27}
            alt={''}
          />
        </Container>
        <Button
          customStyle={style.button}
          customFontStyle={style.buttonText}
          onPress={onPress}
          testId="modalcontainer-button">
          {buttonText}
        </Button>
      </Container>
    </Container>
  );
};

export default ModalContainer;
