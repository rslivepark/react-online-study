import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  selectedItem: null,
  isLoading: false,
  error: null,
};

export const getProducts = createAsyncThunk(
  'product/fetchAll',
  async (searchQuery, thunkApi) => {
    try {
      const url = `https://my-json-server.typicode.com/rslivepark/react-online-study/products?q=${searchQuery}`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getSingleProducts = createAsyncThunk(
  'product/fetchDetail',
  async (id, thunkApi) => {
    try {
      const url = `https://my-json-server.typicode.com/rslivepark/react-online-study/products/${id}`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getSingleProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedItem = action.payload;
      })
      .addCase(getSingleProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
