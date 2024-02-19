import React, { useContext } from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Cartcontext from './store/CartContext';

const Product = () => {
  const ctx=useContext(Cartcontext);
    const productsArr = [

        {
        id : 1,
        title: 'Colors',        
        price: 100,        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',      
        quantity:1  
        },
        
        {
        id : 2,        
        title: 'Black and white Colors',        
        price: 50,        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',        
        quantity:1  
        },
        
        {
        id : 3,
        title: 'Yellow and Black Colors',        
        price: 70,        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',        
        quantity:1  
        },
        
        {
        id : 4,
        title: 'Blue Color',        
        price: 100,        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',  
        quantity:1        
        }
        
        ]

       const addItem=(item)=>{
        ctx.addItemCart(item)
       }
  return (
    <Container>
      <Row>
        {productsArr.map((product)=>(
            <Col xs={6}  className='mt-5 mb-5' id={product.id} key={product.id}> 
            <Image src={product.imageUrl} rounded/>
            <h2 className='m-3'>{product.title}</h2>
            <div className='d-flex justify-content-between pe-5 ps-5 me-5 ms-5'>
              <h4 className='ps-5'>$ {product.price}</h4>
              <Button variant="primary" className='me-5' onClick={()=>addItem(product)}>Add to cart</Button>
            </div>
          </Col>
        ))}
        
      </Row>
    </Container>
  )
}

export default Product