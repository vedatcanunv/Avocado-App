import React from 'react';
import {FlatList, TouchableOpacity, Text, ScrollView} from 'react-native';

const HomeScreenFlatList = (handle, text, style) => {
  return (
    <ScrollView>
      <TouchableOpacity onPress={handle}>
        <Text style={style}>{text}</Text>
      </TouchableOpacity>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={style}
        horizontal={true}
      />
    </ScrollView>
  );
};

export default HomeScreenFlatList;
