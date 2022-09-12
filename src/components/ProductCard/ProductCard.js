import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Style from './Style';

const ProductCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={Style.container}>
        <Image style={Style.image} source={{uri: product.image}} />
        <View style={Style.bodyContainer}>
          <Text numberOfLines={3} style={Style.title}>
            {product.title}
          </Text>
          <Text numberOfLines={1} style={Style.price}>
            {product.price} TL
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
