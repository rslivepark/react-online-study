import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [auth, setAuth] = useState(false); // true: success login!

  return (
    <>
      <Container>
        <NavBar setAuth={setAuth} auth={auth} />
        <Routes>
          <Route path='/' element={<ProductAll />} />
          <Route path='/login' element={<Login setAuth={setAuth} />} />
          <Route path='/product/:id' element={<PrivateRoute auth={auth} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

// 챌린지
//1. 유저는 로그아웃 할 수 있다
//2. 로그인이 된 상태이면 로그아웃 버튼이, 로그아웃 된 상태이면 로그인 버튼이 보인다
//3. 로고를 클릭하면 상품 전체 페이지로 이동한다
//4. 모바일 버전에서 메뉴는 사이드 메뉴로 들어간다. 제품 사진들은 한장씩 세로로 나온다.
