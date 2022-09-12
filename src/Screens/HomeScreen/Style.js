import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

export default StyleSheet.create({
  scrollViewBottomMargin: {
    flex: 1,
    marginBottom: 10,
  },
  myContentContainerStyle: {
    alignSelf: 'flex-start',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  myFlatListStyle: {
    margin: 10,
  },
  title: {
    marginLeft: 20,
    marginTop: 15,
    fontSize: 25,
    fontWeight: '500',
    color: theme.COLORS.green,
  },
  icon: {
    marginHorizontal: 10,
    fontSize: 30,
    alignSelf: 'flex-end',
    color: theme.COLORS.green,
  },
});
