import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Product = () => {
    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]

  return (
    <Container>
      <Row>
        {productsArr.map((product)=>(
            <Col xs={6}  className='mt-5 mb-5'>
            <Image src={product.imageUrl} rounded/>
            <h2 className='m-3'>{product.title}</h2>
            <div className='d-flex justify-content-between pe-5 ps-5 me-5 ms-5'>
              <h4 className='ps-5'>$ {product.price}</h4>
              <Button variant="primary" className='me-5 '>Add to cart</Button>
            </div>
          </Col>
        ))}
        
      </Row>
    </Container>
  )
}

export default Product