import React from 'react';
import {Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Style from './Style';
import ProductCard from '../../components/ProductCard/ProductCard';
import Error from '../../components/Error/Error';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../constants/theme';
import {UseCustomContext} from '../../context/context';

function HomeScreen({navigation}) {
  const {providerData, error} = UseCustomContext();

  const mensClothingData = providerData.filter(
    x => x.category === "men's clothing",
  );
  const jeweleryData = providerData.filter(x => x.category === 'jewelery');
  const electronicsData = providerData.filter(
    x => x.category === 'electronics',
  );
  const womensClothingData = providerData.filter(
    x => x.category === "women's clothing",
  );

  const mensClothingText = "men's clothing";
  const jeweleryText = 'jewelery';
  const electronicsText = 'electronics';
  const womensClothingText = "women's clothing";

  const handleProductSelect = (id, title) => {
    console.log('Ürün detay sayfasına geçildi');
    navigation.navigate('ProductScreen', {
      id: id,
      title: title,
    });
  };

  const renderProduct = ({item}) => (
    <ProductCard
      product={item}
      onSelect={() => handleProductSelect(item.id, item.title)}
    />
  );

  const handleCategorySelect = (category, title) => {
    navigation.navigate('CategoryScreen', {
      category: category,
      title: title,
    });
  };

  if (error) {
    return <Error />;
  }
  return (
    <SafeAreaView style={theme.STYLES.container}>
      <ScrollView
        style={Style.scrollViewBottomMargin}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={Style.categoryContainer}
          onPress={() =>
            handleCategorySelect(mensClothingText, "Men's clothing")
          }>
          <Text style={Style.title}>Men's Clothing</Text>
          <Icon style={Style.icon} name={'face-man-outline'} />
        </TouchableOpacity>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={Style.myFlatListStyle}
          horizontal={true}
          data={mensClothingData}
          renderItem={renderProduct}
        />
        <TouchableOpacity
          style={Style.categoryContainer}
          onPress={() => handleCategorySelect(jeweleryText, 'Jewelery')}>
          <Text style={Style.title}>Jewelery</Text>
          <Icon style={Style.icon} name={'diamond-stone'} />
        </TouchableOpacity>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={Style.myFlatListStyle}
          horizontal={true}
          data={jeweleryData}
          renderItem={renderProduct}
        />
        <TouchableOpacity
          style={Style.categoryContainer}
          onPress={() => handleCategorySelect(electronicsText, 'Electronics')}>
          <Text style={Style.title}>Electronics</Text>
          <Icon style={Style.icon} name={'cellphone'} />
        </TouchableOpacity>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={Style.myFlatListStyle}
          horizontal={true}
          data={electronicsData}
          renderItem={renderProduct}
        />
        <TouchableOpacity
          style={Style.categoryContainer}
          onPress={() =>
            handleCategorySelect(womensClothingText, "Women's clothing")
          }>
          <Text style={Style.title}>Women'S Clothing</Text>
          <Icon style={Style.icon} name={'face-woman-outline'} />
        </TouchableOpacity>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={Style.myFlatListStyle}
          horizontal={true}
          data={womensClothingData}
          renderItem={renderProduct}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
/*
if (loading) {
  return <Loading size="large" color={'green'} />;
}
*/
