import React from 'react';
import { Button } from 'react-bootstrap';

export default function WeatherButton({ cities, setCity }) {
  return (
    <div>
      <Button variant='warning'>현재위치</Button>
      {cities.map((city) => (
        <Button variant='warning' onClick={() => setCity(city)}>
          {city}
        </Button>
      ))}
    </div>
  );
}
