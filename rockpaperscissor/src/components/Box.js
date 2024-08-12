import React from 'react';

export default function Box({ title, item, result }) {
  return (
    <div
      className={`box ${
        result && result === 'Win' ? 'green' : result === 'Lose' ? 'red' : 'tie'
      }`}
    >
      <h1 className='box-title'>{title}</h1>
      <img className='item-img' src={item && item.img} />
      <h2>{result}</h2>
    </div>
  );
}
