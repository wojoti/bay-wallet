import {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import style from './Header.style';

export type HeaderProps = PropsWithChildren<{
  color?: string;
  testId?: string;
  align?: 'left' | 'auto' | 'right' | 'center' | 'justify';
  size?: number;
  spacing?: number;
}>;

const Header = ({
  color,
  align,
  spacing,
  size,
  testId,
  children,
}: HeaderProps) => {
  return (
    <Text style={style({color, size, align, spacing}).wrapper} testID={testId}>
      {children}
    </Text>
  );
};

export default Header;
