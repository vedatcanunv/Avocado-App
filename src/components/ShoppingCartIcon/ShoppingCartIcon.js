import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Style';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ShoppingCartIcon = () => {
  const cartItem = useSelector(state => state.cart);
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ShoppingCartScreen')}>
      <View style={Style.container}>
        {/* {cartItem.length > 0 ? (
          <View style={Style.iconTextContainer}>
            <Text>{cartItem.length}</Text>
          </View>
        ) : null} */}
        <Icon name={'shopping-cart'} size={30} color={'green'} />
      </View>
    </TouchableOpacity>
  );
};

export default ShoppingCartIcon;
