import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  password: '',
  authenticate: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.authenticate = true;
    },
    logout(state, action) {
      state.id = '';
      state.password = '';
      state.authenticate = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
