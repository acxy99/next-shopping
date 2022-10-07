import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      // to check if item is available
      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
        state.totalQuantity++;
      } else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const exsitingItem = state.itemList.find((item) => item.id == id);

      if (exsitingItem.quantity == 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        exsitingItem.quantity--;
        exsitingItem.totalPrice -= exsitingItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = true;
    },
  },
});

export const { addItemToCart, removeItemFromCart, setShowCart } =
  cartSlice.actions;

export default cartSlice;
