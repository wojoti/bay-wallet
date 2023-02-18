import {StyleSheet} from 'react-native';
import {boldFont, primary} from 'style/style';

interface Props {
  type: 'primary' | 'white' | 'simple' | 'alt' | 'disabled' | 'action';
  pressed?: boolean;
}

interface textProps {
  type: 'primary' | 'white' | 'simple' | 'alt' | 'disabled' | 'action';
}
export const textStyle = ({type}: textProps) =>
  StyleSheet.create({
    text: {
      margin: 0,
      padding: 0,
      textAlign: 'center',
      fontFamily: boldFont,
      fontSize: 18,
      color:
        type === 'white'
          ? 'black'
          : type === 'simple' || type === 'alt'
          ? primary
          : 'white',
    },
  });

const style = ({type, pressed}: Props) =>
  StyleSheet.create({
    wrapper: {
      margin: 0,
      padding: 0,
      width: '100%',
      height: 60,
      borderRadius: 8,
      borderWidth: type === 'alt' ? 1 : 0,
      borderColor: primary,
      borderStyle: 'solid',
      opacity: pressed ? 0.8 : 1,
      elevation: type === 'action' ? 5 : 0,
      backgroundColor:
        type === 'primary'
          ? primary
          : type === 'disabled'
          ? '#AFAFAF'
          : type === 'action'
          ? '#4E439E'
          : 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
export default style;
