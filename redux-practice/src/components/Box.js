import React from 'react';
import { useSelector } from 'react-redux';

export default function Box() {
  const count = useSelector((state) => state.count);
  return <h1>{count}!!!</h1>;
}
