import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import ProductScreen from './Screens/ProductScreen/ProductScreen';
import CategoryScreen from './Screens/CategoryScreen/CategoryScreen';
import ShoppingCartScreen from './Screens/ShoppingCartScreen/ShoppingCartScreen';
import ShoppingCartIcon from './components/ShoppingCartIcon/ShoppingCartIcon';
import theme from './constants/theme';
import {UseCustomContext} from './context/context';
import {SplashScreen} from './Screens/SplashScreen/SplashScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const {initializing} = UseCustomContext();
  if (initializing) {
    return <SplashScreen />;
  } else {
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: 'Avacado',
          headerStyle: {backgroundColor: theme.COLORS.lightGreen100},
          headerTitleAlign: 'center',
          headerTintColor: theme.COLORS.green,
          headerTitleStyle: {
            fontWeight: theme.STYLES.FONT.bold,
            width: 20,
          },
          statusBarColor: 'green',
          navigationBarHidden: false,
          headerRight: () => <ShoppingCartIcon />,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={({route}) => ({
            title:
              route.params.title.length < 20
                ? route.params.title
                : route.params.title.substring(0, 17) + '...',
          })}
        />
        <Stack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={({route}) => ({title: route.params.title})}
        />
        <Stack.Screen
          name="ShoppingCartScreen"
          component={ShoppingCartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
