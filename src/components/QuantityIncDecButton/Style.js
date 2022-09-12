import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

export default StyleSheet.create({
  container: {
    maxWidth: 20,
  },
  icon: {
    backgroundColor: theme.COLORS.lightGreen100,
    borderRadius: 100,
    margin: 2,
  },
  button: {
    color: theme.COLORS.lightGreen100,
    borderRadius: 100,
    margin: 2,
  },
  text: {
    margin: 5,
  },
});
