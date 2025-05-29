// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setOpenCart: (state) => {
      state.cartState = true;
    },
    setCloseCart: (state) => {
      state.cartState = false;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success('Item quantity increased');
      } else {
        const newItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(newItem);
        toast.success(`${action.payload.title} added to cart`);
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    setRemoveItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
      toast.success(`${action.payload.title} removed from cart`);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success('Item quantity increased');
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    },
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemIndex >= 0 && state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success('Item quantity decreased');
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    },
    setClearCartItems: (state) => {
      state.cartItems = [];
      toast.success('Cart cleared');
      localStorage.setItem('cart', JSON.stringify([]));
    },
    setGetTotals: (state) => {
      const { totalAmount, totalQTY } = state.cartItems.reduce(
        (acc, item) => {
          const itemTotal = item.price * item.cartQuantity;
          acc.totalAmount += itemTotal;
          acc.totalQTY += item.cartQuantity;
          return acc;
        },
        { totalAmount: 0, totalQTY: 0 },
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQTY;
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setGetTotals,
} = cartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQuantity = (state) => state.cart.cartTotalQuantity;

export default cartSlice.reducer;
