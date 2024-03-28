import React,{useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {useParams } from 'react-router-dom'

const ProductDetail = () => {
  const [products,setProducts] = useState(null)
  const {id} = useParams()
  const getProductDetail = async() =>{
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log("data: ",data)
    setProducts(data)
  }

  useEffect(() =>{
    getProductDetail()
  },[])


  return <Container>
  <Row>
    <Col className="product-img"> <img src={products?.img}/></Col>
    <Col>
      <div>{products?.title}</div>
      <div>{products?.price}</div>
    </Col>
  </Row>
</Container>
}

export default ProductDetail