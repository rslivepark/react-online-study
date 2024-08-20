import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div
      className='product-card'
      onClick={showDetail}
      style={{ marginBottom: '1rem' }}
    >
      <p className='photo'>
        <img src={item?.img} alt={item?.title} />
      </p>
      <div className='text'>
        <p className='choice-text'>{item.choice ? 'Choice' : ''}</p>
        <p className='title'>
          {item?.title}{' '}
          <span className='choice-text'>{item.new ? 'New' : ''}</span>{' '}
        </p>
        <div className='bottom'>
          <p className='price'>₩{item?.price} </p>
        </div>
      </div>
    </div>
  );
}
