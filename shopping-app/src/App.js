import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;

//1. 전체상품 페이지, 로그인, 상품상세 페이지
//1-1. 네비게이션 바 만들기
//2. 전체상품을 볼 수 있다
//3. 로그인 버튼 누르면 로그인 페이지 나온다
//3. 상품 디테일 눌렀으나 로그인이 안됐을경우에는 로그인페이지가 먼저 나온다
//4. 로그인이 되었을 경우 상품 디테일 볼 수 있다.
//5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//5. 로그아웃이 되면 상품 디테일페이지 볼 수 없다. 다시 로그인 페이지가 보인다
//6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
//7. 상품을 검색할 수 있다.
