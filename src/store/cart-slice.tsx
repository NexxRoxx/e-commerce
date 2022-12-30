import { createSlice } from "@reduxjs/toolkit";

interface state {
  items: any[];
  totalPrice: number;
  totalQuantity: number;
  changed: boolean;
}

const initialState: state = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      state.totalPrice += newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          img: newItem.img,
          branch: newItem.branch,
          productName: newItem.productName,
          stars: newItem.stars,
          price: newItem.price,
          totalPrice: newItem.price,
          delivery: newItem.delivery,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      existingItem?.price ? (state.totalPrice -= existingItem?.price) : "";
      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem?.quantity ? existingItem.quantity-- : "";
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
