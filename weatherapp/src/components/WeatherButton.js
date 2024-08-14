import React from 'react';
import { Button } from 'react-bootstrap';

export default function WeatherButton({
  cities,
  setCity,
  city,
  handleCityChange,
}) {
  return (
    <div className='weatherButton'>
      <Button
        variant={city === '' ? 'success' : 'warning'}
        onClick={() => handleCityChange('current')}
        className='buttonTag'
      >
        현재위치
      </Button>
      {cities.map((cityName, index) => (
        <Button
          key={index}
          variant={city === cityName ? 'success' : 'warning'}
          onClick={() => handleCityChange(cityName)}
          className='buttonText buttonTag'
        >
          {cityName}
        </Button>
      ))}
    </div>
  );
}
