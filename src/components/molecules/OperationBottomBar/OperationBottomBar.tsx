import {ComposableButton, Container, Img, ImgType} from 'components/atoms';
import {PropsWithChildren} from 'react';
import style from './OperationBottomBar.style';

export type OperationBottomBarProps = PropsWithChildren<{
  onCardPress: () => void;
  onMenuPress: () => void;
  onChartPress: () => void;
  testId?: string;
}>;

const OperationBottomBar = ({
  onCardPress,
  onMenuPress,
  onChartPress,
  testId,
}: OperationBottomBarProps) => {
  return (
    <Container testId={testId} customStyle={style.wrapper} align="center">
      <Container
        direction="row"
        justify="space-between"
        align="center"
        customStyle={style.whiteArea}>
        <ComposableButton
          customStyle={style.button}
          onPress={onCardPress}
          testId={'operationbottombar-cards'}>
          <Img src={ImgType.iconCard} height={'17'} width={23} alt={''} />
        </ComposableButton>
        <ComposableButton
          customStyle={style.purpleButton}
          onPress={onMenuPress}
          testId={'operationbottombar-menu'}>
          <Img src={ImgType.squares} height={'30'} width={30} alt={''} />
        </ComposableButton>
        <ComposableButton
          customStyle={style.button}
          onPress={onChartPress}
          testId={'operationbottombar-chart'}>
          <Img src={ImgType.iconChart} height={'31'} width={23} alt={''} />
        </ComposableButton>
      </Container>
    </Container>
  );
};

export default OperationBottomBar;
