import {StyleSheet} from 'react-native';
import themes from '../../constants/theme';

export default StyleSheet.create({
  productImage: {
    margin: 20,
    height: 300,
    width: 250,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  titleContainer: {
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  title: {
    color: themes.COLORS.green,
    fontWeight: '400',
    fontSize: 25,
    alignSelf: 'stretch',
    paddingVertical: 10,
  },
  descContainer: {marginHorizontal: 20},
  desc: {
    paddingVertical: 10,
    alignSelf: 'stretch',
    fontStyle: 'italic',
    color: themes.COLORS.black,
    fontSize: 20,
  },
  priceContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  price: {
    color: themes.COLORS.green,
    fontSize: 40,
    fontWeight: '700',
    margin: 5,
    marginBottom: 10,
  },
  addToCartButtonIconContainerStyle: {
    marginLeft: 10,
  },
  addToCartButtonTitleStyle: {
    color: themes.COLORS.green,
    fontSize: 25,
    fontWeight: '600',
  },
  addToCartButtonStyle: {
    backgroundColor: themes.COLORS.lightGreen100,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
  },
  addToCartButtonContainerStyle: {
    alignSelf: 'center',
    width: 300,
    marginVertical: 10,
    marginBottom: 50,
  },
  dropdown: {
    width: 175,
    height: 50,
    margin: 10,
    padding: 10,
    backgroundColor: themes.COLORS.white,
    borderRadius: 12,
    shadowColor: themes.COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});
