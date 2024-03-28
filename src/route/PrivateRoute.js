import React from 'react'
import ProductDetail from '../page/ProductDetail'
import Login from '../page/Login'
import { Navigate } from 'react-router-dom'

//왜 바로 <Login/>가는 게 아니라 navigate 쓴느거지
const PrivateRoute = ({authenticate}) => {
  return authenticate == true? <ProductDetail/> : <Navigate to="/login"/>
}

export default PrivateRoute