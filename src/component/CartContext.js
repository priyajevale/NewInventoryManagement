// import React,{createContext} from "react";
// const CartContext=createContext({
// name:[],
// TotalAmount:0,
// addItem:(item) =>{ },
// removeItem:id=>{}
// });
// export default CartContext;
import React, { createContext, useReducer } from 'react';

const CartContext = createContext({
  cart: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const existingItemIndex = state.cart.findIndex(item => item.id === action.item.id);

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += action.item.quantity;
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, action.item] };
      }

    case 'REMOVE':
      // Implement the logic to remove an item from the cart
      return state;

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, { cart: [] });

  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    cart: cartState.cart,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
