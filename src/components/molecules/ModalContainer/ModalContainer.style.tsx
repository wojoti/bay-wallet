import {StyleSheet} from 'react-native';
import {primary, secondary, successGreen} from 'theme/colors';

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#0000004a',
  },
  spacer: {
    marginBottom: 20,
  },
  box: {
    backgroundColor: secondary,
    borderRadius: 8,
    borderColor: secondary,
    width: '90%',
    paddingHorizontal: 40,
    paddingTop: 50,
    paddingBottom: 30,
  },
  circle: {
    borderRadius: 45,
    borderWidth: 1,
    borderColor: successGreen,
    backgroundColor: successGreen,
    width: 'auto',
    padding: 15,
    marginTop: 30,
    marginBottom: 40,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.18,
    shadowRadius: 6.0,

    elevation: 10,
  },
  button: {
    backgroundColor: primary,
    width: '100%',
    height: 50,
  },
  buttonText: {
    color: secondary,
  },
});
export default style;
