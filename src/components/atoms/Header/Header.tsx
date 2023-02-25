import {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import style from './Header.style';

export type HeaderProps = PropsWithChildren<{
  color?: string;
  testId?: string;
  align?: 'left' | 'auto' | 'right' | 'center' | 'justify';
  size?: number;
}>;

const Header = ({color, align, size, testId, children}: HeaderProps) => {
  return (
    <Text style={style({color, size, align}).wrapper} testID={testId}>
      {children}
    </Text>
  );
};

export default Header;
