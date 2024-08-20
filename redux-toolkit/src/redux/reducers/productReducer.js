import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  selectedItem: null,
};

// export default function productReducer(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case 'GET_PRODUCT_SUCCESS':
//       return { ...state, productList: payload.data };
//     case 'GET_PRODUCT_DETAIL':
//       return { ...state, selectedItem: payload.data };
//     default:
//       return { ...state };
//   }
// }

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload.data;
    },
    getSingleProducts(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
});

// console.log(productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;
