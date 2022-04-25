import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get('http://localhost:8000/api/products');
      setProducts(data);
    }
    fetchProduct();
  })
  return (
    <>
        <h1>Latest Product</h1>
        <Row>
            
            {products.map((product) => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}></Product>
                </Col>
            ))}
            
        </Row>
    </>
  )
}

export default HomePage