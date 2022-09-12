import {StyleSheet} from 'react-native';
import theme from './constants/theme';

export default StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconStyle: {
    color: theme.COLORS.green,
    fontSize: 30,
    type: 'FontAwesome5',
  },
});
