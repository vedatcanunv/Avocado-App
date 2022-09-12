import React, {useState} from 'react';
import {View, Image, ScrollView, SafeAreaView, Text} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Style from './Style';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/actions/cartActions';
import {Button} from '@rneui/themed';
import {Dropdown} from 'react-native-element-dropdown';
import theme from '../../constants/theme';

const colorData = [
  {label: 'Kırmızı', value: '1'},
  {label: 'Mavi', value: '2'},
  {label: 'Yeşil', value: '3'},
];

function ProductScreen({route, navigation}) {
  const [value, setValue] = useState(null);
  const [chosenColor, setColor] = useState(null);

  const {id} = route.params;
  const {loading, error, data} = useFetch(Config.API_URL + '/' + id);

  const renderDropDownItem = item => {
    return (
      <View style={Style.item}>
        <Text style={Style.textItem}>{item.label}</Text>
        {item.value === value}
      </View>
    );
  };

  const dispatch = useDispatch();
  const handleAddToShoppingCart = () => {
    dispatch(
      addToCart({
        data: data,
        quantity: 1,
        color: chosenColor,
        colorValue: value,
      }),
    );
  };

  if (loading) {
    return <Loading size="large" color={'green'} />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={theme.STYLES.container}>
      <ScrollView>
        <View>
          <View style={Style.titleContainer}>
            <Text numberOfLines={2} style={Style.title}>
              {data.title}
            </Text>
          </View>
          <Image source={{uri: data.image}} style={Style.productImage} />
          <View style={Style.descContainer}>
            <Text numberOfLines={4} style={Style.desc}>
              {data.description}
            </Text>
          </View>
          <View style={Style.priceContainer}>
            <Text style={Style.price}>{data.price} TL</Text>
            <Dropdown
              style={Style.dropdown}
              placeholderStyle={Style.placeholderStyle}
              selectedTextStyle={Style.selectedTextStyle}
              labelField="label"
              valueField="value"
              placeholder="Renk Seçiniz"
              searchPlaceholder="Search..."
              value={value}
              data={colorData}
              maxHeight={300}
              renderItem={renderDropDownItem}
              onChange={item => {
                setValue(item.value);
                setColor(item.label);
              }}
            />
          </View>
          <View style={{}}>
            <Button
              title="Sepete Ekle"
              icon={{
                name: 'cart-plus',
                type: 'font-awesome-5',
                size: 25,
                color: 'green',
              }}
              iconRight
              iconContainerStyle={Style.addToCartButtonIconContainerStyle}
              titleStyle={Style.addToCartButtonTitleStyle}
              buttonStyle={Style.addToCartButtonStyle}
              containerStyle={Style.addToCartButtonContainerStyle}
              onPress={() => handleAddToShoppingCart()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProductScreen;
