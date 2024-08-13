import React from 'react';
import { Button } from 'react-bootstrap';

export default function WeatherButton() {
  return (
    <div>
      <Button variant='warning'>현재위치</Button>
      <Button variant='warning'>Paris</Button>
      <Button variant='warning'>New York</Button>
      <Button variant='warning'>London</Button>
    </div>
  );
}
