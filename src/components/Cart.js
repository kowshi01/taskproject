import React, { useContext } from 'react';
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Cartcontext from './store/CartContext';
const Cart = (props) => {
    const ctx=useContext(Cartcontext)  
        const showCart=(            
            <ListGroup className='my-3'>
                    {ctx.items.map((product)=>(
                        <ListGroup.Item id={product.id} key={product.id}>
                            <div className='d-flex p-3'>
                                <img src={product.imageUrl} alt='img' width={50}/>
                                <h3 className='ps-3'>{product.title}</h3>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <h5 className='pt-2 ps-3'> $ {product.price} - {product.quantity}</h5>
                                <Button>Delete</Button>
                            </div>                           
                        </ListGroup.Item>
                    ))}
                </ListGroup>
        )

  return (
    <div className='bg-light text-dark position-absolute top-1 end-0 py-4 px-4 mt-5'>
        <div className='d-flex justify-content-between'>
        <h3 className='mx-auto'>Cart</h3>
        <Button onClick={props.onClose} variant="light">X</Button>
        </div>
        {showCart}
        <h3>Total Price : $0</h3>
        <Button>Purchase</Button>
    </div>
  )
}

export default Cart