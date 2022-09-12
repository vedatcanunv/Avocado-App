import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Style';
import {useDispatch} from 'react-redux';
import {Increase, RemoveItem, Decrease} from '../../redux/actions/cartActions';
import QuantityIncDecButton from '../QuantityIncDecButton/QuantityIncDecButton';

const ShoppingCard = props => {
  const dispatch = useDispatch();
  const handleRemoveToShoppingCart = () => {
    dispatch(RemoveItem(props.data));
  };

  const handleDecreaseQuantity = () => {
    dispatch(
      Decrease({
        data: props.data,
        price: props.data.data.price, // neden burda ekstradan datanın içindeki price'ı taanımlamamıza gerek olduğunu sor
        quantity: props.data.quantity,
        color: props.data.color,
        colorValue: props.data.colorValue,
      }),
    );
  };
  const handleIncreaseQuantity = () => {
    dispatch(
      Increase({
        data: props.data,
        price: props.data.data.price,
        quantity: props.data.quantity,
        color: props.data.color,
        colorValue: props.data.colorValue,
      }),
    );
  };
  // console.log(props.data);
  // console.log(props.data.data.image);
  // console.log(props.data.color);
  return (
    <View style={Style.card}>
      <View style={Style.imageContainer}>
        <Image
          style={Style.image}
          resizeMode="stretch"
          source={{uri: props.data.data.image}}
        />
      </View>
      <View style={Style.textContainer}>
        <Text numberOfLines={3} style={Style.title}>
          {props.data.data.title}
        </Text>
        <View style={Style.chosenColorContainer}>
          <Text style={Style.chosenColor}> Seçilen Renk : </Text>
          {props.data.color === 'Kırmızı' ? (
            <Text style={Style.ifChosenColorRed}>{props.data.color}</Text>
          ) : props.data.color === 'Mavi' ? (
            <Text style={Style.ifChosenColorBlue}>{props.data.color} </Text>
          ) : props.data.color === 'Yeşil' ? (
            <Text style={Style.ifChosenColorGreen}>{props.data.color}</Text>
          ) : (
            <Text style={Style.chosentColor}>Renk Seçilmedi!!!</Text>
          )}
          <Text style={Style.price}>{props.data.data.price}TL</Text>
        </View>
      </View>
      <View style={Style.rightContainer}>
        <TouchableOpacity
          style={Style.iconContainer}
          onPress={() => handleRemoveToShoppingCart()}>
          <Icon style={Style.icon} name="close" size={30} color="green" />
        </TouchableOpacity>
        <QuantityIncDecButton
          decrease={handleDecreaseQuantity}
          increase={handleIncreaseQuantity}
          quantity={props.data.quantity}
        />
      </View>
    </View>
  );
};

export default ShoppingCard;
