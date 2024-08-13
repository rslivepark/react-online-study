import React from 'react';

export default function WeatherBox({ weather }) {
  return (
    <div className='weatherBox'>
      <img
        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
        alt='weather_icon'
      />
      <div>{weather?.name}</div>
      <h2>
        {weather?.main.temp}C / {((weather?.main.temp * 9) / 5 + 32).toFixed(2)}
        F
      </h2>
      <h4>{weather?.weather[0].description}</h4>
    </div>
  );
}
