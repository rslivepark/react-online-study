import React from 'react';

export default function Button({ onClick, btnName }) {
  return (
    <>
      <button className='btn' onClick={onClick}>
        {btnName}
      </button>
    </>
  );
}
