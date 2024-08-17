import React from 'react';
import ProductDetail from '../pages/ProductDetail';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ auth }) {
  return auth ? <ProductDetail /> : <Navigate to='/login' />;
}
