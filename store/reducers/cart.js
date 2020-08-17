import CartItem from '../../models/cart-item';
import { ADD_TO_CART } from '../actions/cart';

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      if (state.items[addedProduct.id]) {
        const item = state.items[addedProduct.id];
        return {
          items: {
            ...state.items,
            [addedProduct.id]: {
              ...item,
              quantity: item.quantity + 1,
              sum: item.sum + addedProduct.price,
            },
          },
          totalAmount: state.totalAmount + addedProduct.price,
        };
      } else {
        const cartItem = new CartItem(
          1,
          addedProduct.price,
          addedProduct.title,
          addedProduct.price
        );

        return {
          items: { ...state.items, [addedProduct.id]: cartItem },
          totalAmount: state.totalAmount + addedProduct.price,
        };
      }
  }
  return state;
};
