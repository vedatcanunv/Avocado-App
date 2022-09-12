import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

export default StyleSheet.create({
  image: {
    width: 110,
    minHeight: 120,
    resizeMode: 'stretch',
  },
  bodyContainer: {
    minWidth: 90,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    color: theme.COLORS.green,
    fontSize: 15,
    textAlign: 'left',
  },
  price: {
    color: theme.COLORS.green,
    fontSize: 20,
    textAlign: 'left',
  },
});
