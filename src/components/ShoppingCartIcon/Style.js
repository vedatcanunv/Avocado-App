import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

export default StyleSheet.create({
  container: {
    padding: 5,
  },
  iconTextContainer: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: theme.COLORS.lightGreen600,
    right: 15,
    bottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
  },
  iconText: {
    color: theme.COLORS.white,
    fontWeight: theme.STYLES.FONT.bold,
    fontSize: 15,
  },
});
