import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import Style from './Style';
import CategoryScreenProductCart from '../../components/CategoryScreenProductCart/CategoryScreenProductCart';
import theme from '../../constants/theme';

function CategoryScreen({route, navigation}) {
  const {category} = route.params;
  const {loading, error, data} = useFetch(
    Config.API_URL + '/category/' + category,
  );

  const handleProductSelect = (id, title) => {
    console.log(title);
    navigation.navigate('ProductScreen', {
      id: id,
      title: title,
    });
  };
  const renderProduct = ({item}) => (
    <CategoryScreenProductCart
      product={item}
      onSelect={() => handleProductSelect(item.id, item.title)}
    />
  );

  if (loading) {
    return <Loading size="large" color={'green'} />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={theme.STYLES.container}>
      <FlatList
        data={data}
        renderItem={renderProduct}
        showsVerticalScrollIndicator={false}
        style={Style.myFlatListStyle}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

export default CategoryScreen;
