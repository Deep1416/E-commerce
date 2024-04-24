import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProductIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingProductIndex !== -1) {
        state[existingProductIndex].Quantity += 1;
      } else {
        state.push({ ...action.payload, Quantity: 1 });
      }
    },
    handleIncrease: (state, action) => {
      const existingProduct = state.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.Quantity += 1;
      }
    },
    handleDecrease: (state, action) => {
      const existingProduct = state.find(item => item.id === action.payload.id);
      if (existingProduct && existingProduct.Quantity > 1) {
        existingProduct.Quantity -= 1;
      }
    },
    handleRemove: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, handleIncrease, handleDecrease, handleRemove } = cartSlice.actions;

export default cartSlice.reducer;
