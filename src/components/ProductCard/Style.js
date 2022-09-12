import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

export default StyleSheet.create({
  container: {
    margin: 10,
    width: 100,
    minHeight: 100,
  },
  image: {
    width: 90,
    minHeight: 90,
    resizeMode: 'stretch',
  },
  bodyContainer: {
    minWidth: 90,
    padding: 5,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '400',
    color: theme.COLORS.green,
    fontSize: 15,
    textAlign: 'left',
  },

  price: {
    color: theme.COLORS.green,
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'left',
  },
});
