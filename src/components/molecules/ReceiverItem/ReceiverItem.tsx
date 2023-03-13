import {
  ComposableButton,
  Container,
  Img,
  ImgType,
  Label,
} from 'components/atoms';
import {PropsWithChildren} from 'react';
import style from './ReceiverItem.style';

export type ReceiverItemProps = PropsWithChildren<{
  id: string;
  firstname: string;
  onPress: (id: string) => void;
  selectedId: string;
  testId?: string;
}>;

const ReceiverItem = ({
  id,
  firstname,
  onPress,
  selectedId,
  testId,
}: ReceiverItemProps) => {
  const onReceiverPress = () => {
    onPress(id);
  };
  return (
    <Container customStyle={style.wrapper} testId={testId} align="flex-start">
      {id === selectedId ? (
        <ComposableButton
          customStyle={style.buttonPressed}
          onPress={onReceiverPress}
          testId="receiveritem-button">
          <Img
            testId="receiveritem-img"
            src={ImgType.iconUser}
            height={24}
            width={23}
            alt={''}
          />
        </ComposableButton>
      ) : (
        <ComposableButton
          customStyle={style.button}
          onPress={onReceiverPress}
          testId="receiveritem-button">
          <Img
            testId="receiveritem-img"
            src={ImgType.iconChartSelected}
            height={24}
            width={23}
            alt={''}
          />
        </ComposableButton>
      )}

      <Container customStyle={style.spacing}>
        <Label testId="receiveritem-label">{firstname}</Label>
      </Container>
    </Container>
  );
};

export default ReceiverItem;
