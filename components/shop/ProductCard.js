import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
} from 'react-native';

import { Text, Button } from '../../components/UI';

import Colors from '../../const/Colors';

const ProductCard = ({ title, imageUrl, price, onViewDetail, onAddToCart }) => {
  const TouchableComponent =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <View style={styles.container}>
      <View style={styles.touchable}>
        <TouchableComponent onPress={onViewDetail} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title} important>
                {title}
              </Text>
              <Text style={styles.price}>€{price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                title="Details"
                onPress={onViewDetail}
                buttonStyle={styles.button}
                textStyle={styles.buttonText}
              />
              <Button
                title="Add to cart"
                onPress={onAddToCart}
                buttonStyle={styles.button}
                textStyle={styles.buttonText}
              />
            </View>
          </View>
        </TouchableComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    margin: 20,
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: { height: '25%', alignItems: 'center', padding: 10 },
  title: { marginVertical: 4, fontSize: 18, color: Colors.tint_0 },
  price: { color: Colors.tint_1 },
  actions: {
    height: '15%',
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    marginHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.tint_2,
  },
  buttonText: { color: 'white', fontSize: 18, textAlign: 'center' },
});

export default ProductCard;
