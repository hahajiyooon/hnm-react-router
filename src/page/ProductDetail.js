import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useEffect, useState} from 'react'
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap'
import {useParams } from 'react-router-dom'

const ProductDetail = ({size, setSize}) => {
  console.log("{size, setSize}",size, setSize)

  const [products,setProducts] = useState(null)
  const {id} = useParams()
  const getProductDetail = async() =>{
    let url = `https://my-json-server.typicode.com/hahajiyooon/hnm-react-router/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log("data: ",data)
    setProducts(data)
  }

  useEffect(() =>{
    getProductDetail()
  },[])


  return <Container className='product-area'>
  <Row className='product-area'>
    <Col className="product-img"> <img src={products?.img}/></Col>
    <Col>
      <div className='product-title'>{products?.title}</div>
      <div className='product-price'>₩{products?.price}</div>

      <div>
        <div className='product-input-label'>
          사이즈
        </div>
        <div className='detail-area'>
          {products?.size.length >0 && products.size.map((item) => (
            <Button variant="outline-primary" className='margin-l-20 size-btn padding-20'>{item}</Button>        
          ))}
        </div>
        <div className='detail-area'>
          <Button variant="primary" className='order-btn padding-20'><FontAwesomeIcon icon={faBagShopping}/> 주문하기</Button>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Care guide</Accordion.Header>
            <Accordion.Body>
            여러분도 환경 보호를 돕고 더욱 지속 가능한 패션을 만들 수 있습니다. 불필요한 옷이나 가정용 직물을 H&M 매장에 가지고 오면 다시 입을 수 있는 옷을 만드는 데 사용되거나 재사용 또는 재활용됩니다.
            </Accordion.Body>
            <Accordion.Body>
            <a className="a-link" src="https://www2.hm.com/ko_kr/sustainability-at-hm/take-care/take-care.html">
              오랫동안 새것처럼. 의류 관리 방법에 대해 자세히 알아보세요
            </a>
            </Accordion.Body>
          </Accordion.Item>
       </Accordion>
      
      </div>

    </Col>
  </Row>
</Container>
}

export default ProductDetail