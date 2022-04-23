import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {Row, Col , Image, ListGroup, Button, Card, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
import { numberFormat } from '../helpers'


const ProductPage = () => {
  const { id } = useParams()
  const product = products.find((p) => p._id === (id))
  console.log(product)
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating 
              stars={product.rating} 
              reviews={product.numReviews}></Rating>
            </ListGroup.Item>
            <ListGroupItem>
              Price : {numberFormat(product.price)}
            </ListGroupItem>
            <ListGroup.Item>
              Descrpiton: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{numberFormat(product.price)}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.countInStock ===0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductPage