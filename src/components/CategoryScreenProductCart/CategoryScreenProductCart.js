import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Style from './Style';
import theme from '../../constants/theme';

const CategoryScreenProductCart = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={theme.STYLES.container}>
        <Image style={Style.image} source={{uri: product.image}} />
        <View style={Style.bodyContainer}>
          <Text numberOfLines={2} style={Style.title}>
            {product.title}
          </Text>
          <Text> {product.color}</Text>
          <Text style={Style.price}>{product.price} TL</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryScreenProductCart;
