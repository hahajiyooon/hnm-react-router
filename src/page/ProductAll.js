import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'

//api호출은 useEffect가 한다
const ProductAll = () => {
    const [productList,setProductList] = useState([])//[] 배열넣나
    const getProducts = async() => {
        let url = `http://localhost:5000/products`
        let response = await fetch(url)
        let data = await response.json()
        //console.log(data)
        setProductList(data)
    }

    useEffect(() => {
        getProducts()
    },[])
  return (
    <div>
        <ProductCard/>
    </div>
  )
}

export default ProductAll