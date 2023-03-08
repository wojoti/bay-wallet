import {Container} from 'components/atoms';
import {PropsWithChildren} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import style from './GradientArea.style';

export type GradientAreaProps = PropsWithChildren<{
  colors: (string | number)[];
  start?: {
    x: number;
    y: number;
  };
  end?: {
    x: number;
    y: number;
  };
  testId?: string;
}>;

const GradientArea = ({
  testId,
  colors,
  start,
  end,
  children,
}: GradientAreaProps) => {
  return (
    <Container flex={1} customStyle={style.wrapper} testId={testId}>
      <LinearGradient
        start={start}
        end={end}
        style={style.gradient}
        colors={colors}
        testID="gradientarea-gradient">
        {children}
      </LinearGradient>
    </Container>
  );
};

export default GradientArea;
