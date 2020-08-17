import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { SHOP_NAVIGATION_ROUTES } from '../../const/navigationRoutes';
import HeaderButton from '../../components/UI/HeaderButton';
import ProductCard from '../../components/shop/ProductCard';
import { addToCart } from '../../store/actions/cart';

const ProductsOverviewScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductCard
          title={item.title}
          imageUrl={item.imageUrl}
          price={item.price}
          onViewDetail={() =>
            navigation.navigate(SHOP_NAVIGATION_ROUTES.PRODUCT_DETAIL, {
              productId: item.id,
              productTitle: item.title,
            })
          }
          onAddToCart={() => dispatch(addToCart(item))}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'All products',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Cart"
        iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart-item'}
        onPress={() => navigation.navigate(SHOP_NAVIGATION_ROUTES.CART)}
      />
    </HeaderButtons>
  ),
});

export default ProductsOverviewScreen;
