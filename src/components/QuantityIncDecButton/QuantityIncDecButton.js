import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../constants/theme';
import Style from './Style';

const QuantityIncDecButton = ({increase, decrease, quantity}) => {
  return (
    <View style={Style.container}>
      <TouchableOpacity style={Style.button} onPress={increase}>
        <Icon
          name="plus-circle-outline"
          color={theme.COLORS.green}
          style={Style.icon}
        />
      </TouchableOpacity>
      <Text style={Style.text}>{quantity}</Text>
      <TouchableOpacity style={Style.button} onPress={decrease}>
        <Icon
          name="minus-circle-outline"
          color={theme.COLORS.green}
          style={Style.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default QuantityIncDecButton;

// () =>  console.log('Quantity +1 ')

// () => console.log('Quantity -1 ')
