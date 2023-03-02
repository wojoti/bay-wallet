import {PropsWithChildren} from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import style from './Background.style';

export type BackgroundProps = PropsWithChildren<{
  source: ImageSourcePropType;
  testId?: string;
  customStyle?: StyleProp<ViewStyle>;
}>;

const Background = ({
  testId,
  source,
  customStyle,
  children,
}: BackgroundProps) => {
  return (
    <ImageBackground
      source={source}
      style={[style.wrapper, customStyle]}
      testID={testId}>
      {children}
    </ImageBackground>
  );
};

export default Background;
