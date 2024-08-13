import './App.css';
import { useEffect } from 'react';
// import axios from 'axios';

const API_KEY = `929984da8782694dc93368fbb531a259`;

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      // const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    try {
      let response = await fetch(URL);
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);
  return <div>Hello Weather</div>;
}

export default App;

//1.앱이 실행되자마자 현재 위치 기반의 날씨가 보인다
//2.날씨 정보에는 도시이름, 날씨상태(섭씨, 화씨)
//3.5개의 버튼이 있다(1개는 현재위치, 나머지 도시이름)
//4.도시버튼 클릭할 때마다 도시별 날씨가 나온다
//5.현재위치 버튼 누르면 다시 현재위치 기반의 날씨가 나온다
//6.데이터를 들고오는 동안 로딩 슾
