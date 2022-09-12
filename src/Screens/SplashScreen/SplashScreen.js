import React from 'react';
import {View, ImageBackground} from 'react-native';
import Style from './Style';

export const SplashScreen = () => {
  return (
    <View style={Style.myImage}>
      <ImageBackground
        style={Style.myImage}
        source={require('../../assets/splashScreen.png')}
      />
    </View>
  );
};
