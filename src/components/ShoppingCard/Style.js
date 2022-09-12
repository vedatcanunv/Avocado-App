import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

export default StyleSheet.create({
  card: {
    flex: 1,
    maxHeight: 150,
    marginHorizontal: 15,
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    resizeMode: 'contain',
    maxHeight: 100,
    maxWidth: 100,
    minHeight: 100,
    minWidth: 100,
  },
  image: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    color: theme.COLORS.green,
    maxHeight: 80,
    fontWeight: '600',
    fontSize: 18,
  },
  price: {
    alignSelf: 'flex-end',
    color: theme.COLORS.green,
    fontWeight: '400',
    maxHeight: 20,
    fontStyle: 'italic',
    fontSize: 15,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  chosenColorContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  chosenColor: {
    fontStyle: 'italic',
    maxHeight: 30,
    fontWeight: '400',
    fontSize: 17,
    marginTop: 5,
  },
  ifChosenColorRed: {
    color: theme.COLORS.red,
    maxHeight: 30,
    fontWeight: '400',
    fontSize: 17,
    marginTop: 5,
  },
  ifChosenColorBlue: {
    color: theme.COLORS.blue,
    maxHeight: 30,
    fontWeight: '400',
    fontSize: 17,
    marginTop: 5,
  },
  ifChosenColorGreen: {
    color: theme.COLORS.green,
    maxHeight: 30,
    fontWeight: '400',
    fontSize: 17,
    marginTop: 5,
  },
  chosentColor: {
    fontStyle: 'italic',
    fontSize: 11,
    marginBottom: 2,
  },
  icon: {
    margin: 5,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: 35,
  },
});
