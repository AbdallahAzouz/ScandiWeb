import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    sku: "123",
    name: "Acme Disc",
    type: "dvd",
    price: "2",
    height: "1",
    width: "2",
    length: "2",
    size: "5",
    weight: "10",
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});

export const selectAllposts = (state) => state.products;

export const { productAdded } = productsSlice.actions;

export default productsSlice.reducer;
