import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

//1. 전체상품페이지, 로그인, 상품상세페이지
//1-1. 네비게이션바 만들기
//2. 전체상품페이지: 전체 상품을 볼 수 있다
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4. 상품디테일을 눌렀을때, 로그인이 안되있을 경우 로그인페이지가 나ㅏ온다
//5. 로그아웃 버튼 클릭시 로그아웃 된다
//6. 로그아웃되면 상품디테일페이지 볼 수 없고, 다시 로그인 페이지가 보인다
//7. 로그인을 하면 로그아웃이, 로그아웃하면 로그인이 보인다
//8. 상품을 검색할 수 있다
function App() {
  const [authenticate,setAuthenticate]=useState(false) //로그인되면 true로 바뀜


  //authenticate값이 바뀔때마다
  useEffect(() => {
    console.log("authenticate ",authenticate)

  },[authenticate])

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/products/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>

    </div>
  );
}

export default App;
