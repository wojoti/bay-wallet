import {Container} from 'components/atoms';
import {PropsWithChildren} from 'react';
import style from './OperationBottomBar.style';

export type OperationBottomBarProps = PropsWithChildren<{
  onCardPress: () => void;
  onMenuPress: () => void;
  onProfilePress: () => void;
  testId?: string;
}>;

const OperationBottomBar = ({
  onCardPress,
  onMenuPress,
  onProfilePress,
  testId,
}: OperationBottomBarProps) => {
  return <Container testId={testId} customStyle={style.wrapper} />;
};

export default OperationBottomBar;
