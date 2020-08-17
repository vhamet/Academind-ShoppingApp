import React from 'react';
import { ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Text, Button } from '../../components/UI';
import { addToCart } from '../../store/actions/cart';

import Colors from '../../const/Colors';

const ProductDetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const productId = navigation.getParam('productId');
  const product = useSelector(state =>
    state.products.availableProducts.find(product => product.id === productId)
  );

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: 'center' }}
      style={styles.container}
    >
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Button
        title="ADD TO CART"
        onPress={() => dispatch(addToCart(product))}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
      <Text style={styles.price} important>
        ${product.price.toFixed(2)}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = data => ({
  headerTitle: data.navigation.getParam('productTitle'),
});

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: '100%', height: 300 },
  button: {
    marginHorizontal: 20,
    marginVertical: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: Colors.tint_2,
  },
  buttonText: { color: 'white', fontSize: 18, textAlign: 'center' },
  price: {
    paddingBottom: 20,
    color: Colors.tint_1,
    fontSize: 18,
    textAlign: 'center',
  },
  description: {
    paddingHorizontal: 15,
    color: Colors.tint_1,
    fontSize: 14,
    textAlign: 'left',
  },
});

export default ProductDetailScreen;
