import { createSlice } from "@reduxjs/toolkit";
import rtx3090 from "../assets/mostSoldImg/1/rtx3090/one.png";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      {
        id: 1,
        img: rtx3090,
        branch: "EVGA",
        productName: "Nvidia GeForce RTX 3090 XC3 BLACK GAMING",
        stars: "5 Stars",
        price: 1499.99,
        delivery: "Free delivery",
        quantity: 1,
      },
    ],
    totalPrice: 0,
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          img: newItem.img,
          branch: newItem.branch,
          productName: newItem.productName,
          stars: newItem.stars,
          price: newItem.price,
          delivery: newItem.delivery,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        // existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem?.quantity ? existingItem.quantity-- : "";
        // existingItem?.totalPrice
        //   ? existingItem.totalPrice - existingItem.price
        //   : "";
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
