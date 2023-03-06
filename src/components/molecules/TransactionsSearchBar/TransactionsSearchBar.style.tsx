import {StyleSheet} from 'react-native';
import {searchGrey} from 'theme/colors';

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: searchGrey,
    borderRadius: 8,
  },
  searchInput: {
    borderWidth: 0,
    width: '80%',
  },
  searchButton: {width: 'auto', paddingRight: 30},
});
export default style;
