import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Container, Row } from 'react-bootstrap'
import ProductDetail from './ProductDetail'
import { useSearchParams } from 'react-router-dom'

//api호출은 useEffect가 한다
const ProductAll = () => {
    const [productList,setProductList] = useState([])//[] 배열넣나
    const [query, setQuery] = useSearchParams() //query 값 읽어올떄

    console.log("productList ",productList)
    const getProducts = async() => {
      let searchQuery=query.get("q") || "" // ||안붙여주면 데이터 못가져옴
      console.log("쿼리값은?",searchQuery)
      let url = `https://my-json-server.typicode.com/hahajiyooon/hnm-react-router/products?q=${searchQuery}`//q=로 서치하는 기능은 json-server의 알고리즘이 돌아가서 해주는 거
      let response = await fetch(url)
      let data = await response.json()
      console.log("data ",data)
      setProductList(data)
    }

    //query가 바뀌면 다시 호출하도록
    useEffect(() => {
        getProducts()
    },[query])

    //부트스트랩 컨테이너: 아이템 가운데 정렬
    //문제: 메인에 item들 안나옴 > 
  return (
  <Container> 
    <Row>
      {productList.map((item) => (
        <Col md={3}><ProductCard item={item}/></Col>
      ))}
    </Row>
  </Container>

  )
}

export default ProductAll