import { productActions } from '../reducers/productReducer';

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    const url = `https://my-json-server.typicode.com/rslivepark/react-online-study/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    // dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
    dispatch(productActions.getAllProducts({ data }));
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    const url = `https://my-json-server.typicode.com/rslivepark/react-online-study/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    // dispatch({ type: 'GET_PRODUCT_DETAIL', payload: { data } });
    dispatch(productActions.getSingleProducts({ data }));
  };
}

export const productAction = { getProducts, getProductDetail };
