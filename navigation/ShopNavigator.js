import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';

import Colors from '../const/Colors';
import { SHOP_NAVIGATION_ROUTES } from '../const/navigationRoutes';

const ProductsNavigator = createStackNavigator(
  {
    [SHOP_NAVIGATION_ROUTES.PRODUCTS_OVERVIEW]: ProductsOverviewScreen,
    [SHOP_NAVIGATION_ROUTES.PRODUCT_DETAIL]: ProductDetailScreen,
    [SHOP_NAVIGATION_ROUTES.CART]: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.tint_0 : '',
      },
      headerTitleStyle: {
          fontFamily: 'open-sans-bold',
      },
      headerBackTitleStyle: {
          fontFamily: 'open-sans',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.tint_0,
    },
  }
);

export default createAppContainer(ProductsNavigator);
