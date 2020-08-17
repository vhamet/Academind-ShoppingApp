import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { SHOP_NAVIGATION_ROUTES } from '../../const/navigationRoutes';
import HeaderButton from '../../components/UI/HeaderButton';
import ProductCard from '../../components/shop/ProductCard';
import Text from '../../components/UI/Text';
import Button from '../../components/UI/Button';
import { addToCart } from '../../store/actions/cart';

import Colors from '../../const/Colors';

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cartTotal = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    const items = [];
    for (const key in state.cart.items) {
      items.push({
        productId: key,
        productTitle: state.cart.items[key.productTitle],
        productPrice: state.cart.items[key.productPrice],
        quantity: state.cart.items[key.quantity],
        sum: state.cart.items[key.sum],
      });
    }
    return items;
  });

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text important style={styles.total}>
          Total: <Text style={styles.totalValue}>${cartTotal.toFixed(2)}</Text>
        </Text>
        <Button title="Order Now" onPress={() => {}} disabled={!cartItems.length}/>
      </View>
      <View>
        <Text>ITEMS</Text>
      </View>
    </View>
  );
};

CartScreen.navigationOptions = {
  headerTitle: 'Your cart',
};

const styles = StyleSheet.create({
  container: { margin: 20 },
  summary: {
    marginBottom: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  total: { fontSize: 18, color: Colors.tint_1 },
  totalValue: { color: Colors.tint_4 },
});

export default CartScreen;
