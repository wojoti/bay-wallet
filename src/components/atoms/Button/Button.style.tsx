import {StyleSheet} from 'react-native';
import {primary, secondary} from 'theme/colors';
import {boldFont} from 'theme/fonts';

interface Props {
  pressed?: boolean;
}

export const textStyle = StyleSheet.create({
  primaryText: {
    margin: 0,
    padding: 0,
    textAlign: 'center',
    fontFamily: boldFont,
    fontSize: 18,
    color: 'white',
  },
  secondaryText: {
    margin: 0,
    padding: 0,
    textAlign: 'center',
    fontFamily: boldFont,
    fontSize: 18,
    color: primary,
  },
  tertiaryText: {
    margin: 0,
    padding: 0,
    textAlign: 'center',
    fontFamily: boldFont,
    fontSize: 18,
    color: 'black',
  },
  tertiaryAlternativeText: {
    margin: 0,
    padding: 0,
    textAlign: 'center',
    fontFamily: boldFont,
    fontSize: 18,
    color: primary,
  },
});

const style = ({pressed}: Props) =>
  StyleSheet.create({
    // wrapper: {
    //   borderWidth: type === 'alt' ? 1 : 0,
    //   elevation: type === 'action' ? 5 : 0,
    //   backgroundColor:
    //     type === 'primary'
    //       ? primary
    //       : type === 'disabled'
    //       ? '#AFAFAF'
    //       : type === 'action'
    //       ? '#4E439E'
    //       : 'white',
    // },
    primaryButton: {
      height: 60,
      borderRadius: 8,
      borderColor: primary,
      borderStyle: 'solid',
      opacity: pressed ? 0.8 : 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: primary,
    },
    secondaryButton: {
      height: 60,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: primary,
      borderStyle: 'solid',
      opacity: pressed ? 0.8 : 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: secondary,
    },
    tertiaryButton: {
      height: 60,
      borderRadius: 8,
      borderColor: primary,
      borderStyle: 'solid',
      opacity: pressed ? 0.8 : 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: secondary,
    },
  });
export default style;
