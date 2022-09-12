import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import Style from './Style';
import Icon from 'react-native-vector-icons/FontAwesome';
import ShoppingCard from '../../components/ShoppingCard/ShoppingCard';
import {useDispatch, useSelector} from 'react-redux';
import {clearCart} from '../../redux/actions/cartActions';
import theme from '../../constants/theme';

function ShoppingCartScreen({navigation}) {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart);
  const basket = useSelector(state => state);

  const handleClearShoppingCart = () => {
    dispatch(clearCart());
    console.log('Alışveriş Sepeti Temizlendi');
  };

  const renderCartItem = data => {
    console.log('Render Data :', data.item, '\n');
    console.log('Datanın Idsi: ', data.item.data.id);
    // console.log('seçilen renk :', data.item.color);
    return <ShoppingCard data={data.item} key={data.index} />;
  };
  return (
    <SafeAreaView style={theme.STYLES.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={Style.myFlatListStyle}
        data={cartItems}
        renderItem={renderCartItem}
      />
      <View style={Style.bottomBar}>
        {basket.totalPrice === 0 ? null : (
          <Text style={Style.totalPriceText}>
            {basket.totalQty === 0
              ? null
              : basket.totalPrice.toFixed(2) + ' TL'}
          </Text>
        )}
        {basket.totalQty === 0 ? null : (
          <Text style={Style.totalQtyText}>Ürün Adedi: {basket.totalQty}</Text>
        )}
        <TouchableWithoutFeedback onPress={() => handleClearShoppingCart()}>
          <Icon style={Style.trashIcon} name="trash" size={35} />
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}

export default ShoppingCartScreen;
