import {StyleSheet} from 'react-native';

interface Props {
  background?: string;
  radius?: number;
  width?: string;
  mt?: number;
  m?: number;
}
const style = ({background, radius, width, mt, m}: Props) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: background,
    },
    contentWithRadius: {
      backgroundColor: background,
      borderWidth: 0,
      borderColor: 'transparent',
      borderTopLeftRadius: radius,
      borderTopRightRadius: radius,
    },
    sizer: {
      width: width,
      marginTop: mt,
      marginHorizontal: m,
    },
    cardSizer: {
      width: '100%',
      alignItems: 'center',
    },
    pagination: {
      justifyContent: 'flex-start',
      left: 28,
      bottom: 80,
    },
  });
export default style;
