import React from 'react';

export default function Box({ title, item, result }) {
  return (
    <div
      className={`box ${
        result && result === 'Win' ? 'green' : result === 'Lose' ? 'red' : 'tie'
      }`}
    >
      <h1 className='box-title'>{title}</h1>
      <img
        className='item-img'
        src={
          item && item.img
            ? item.img
            : 'https://img.freepik.com/premium-vector/hands-playing-rock-paper-scissors-game-flat-design-style-vector-illustration_540284-598.jpg'
        }
        alt='rocksicssorspaper'
      />
      <h2>{result}</h2>
    </div>
  );
}
