import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import authenticateReducer from './reducers/authenticateReducer';

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
// createStore 사용하기 전에
// combineReducer, thunk, applyMiddleware, composeWithDevTools
// 세팅이 필요했음.. 귀찮아..

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

export default store;
