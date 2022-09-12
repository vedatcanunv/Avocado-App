import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';
export default StyleSheet.create({
  bottomBar: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 100,
    minHeight: 100,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: theme.COLORS.lightGreen100,
    justifyContent: 'space-between',
  },
  totalPriceText: {
    margin: 20,
    padding: 5,
    fontSize: 20,
    fontWeight: theme.STYLES.FONT.bold,
    color: theme.COLORS.green,
  },
  totalQtyText: {
    margin: 20,
    paddingTop: 5,
    fontSize: 18,
    fontWeight: theme.STYLES.FONT.bold,
    textAlign: 'center',
    color: theme.COLORS.green,
  },
  trashIcon: {
    alignSelf: 'center',
    padding: 5,
    marginBottom: 10,
    color: theme.COLORS.green,
    fontWeight: '700',
  },
});
