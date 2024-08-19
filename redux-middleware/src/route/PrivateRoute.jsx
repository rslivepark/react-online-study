import React from 'react';
import ProductDetail from '../pages/ProductDetail';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute() {
  const auth = useSelector((state) => state.auth.authenticate);
  return auth ? <ProductDetail /> : <Navigate to='/login' />;
}
