import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {
    const[addItem,setAddItem]=useState([])
    const[addItemQuantity,setaddItemQuantity]=useState(0)
    const addItemToCartHandler=(item)=>{
        let cartItems=[...addItem];
        let hasItemInCart=false;
        cartItems.forEach((storedItem)=>{
            if(storedItem.id===item.id){
            hasItemInCart=true;
            storedItem.quantity=Number(storedItem.quantity)+Number(item.quantity);
            }
        });
        if(hasItemInCart){
            setAddItem(cartItems);
            setaddItemQuantity(prev=>prev)
        }else{
            setaddItemQuantity(prev=>prev+1)
            setAddItem((prevItems)=>{
            return [...prevItems,item]
            })
        }
    }
   

    const cartContext={
       items : addItem,
       addItemCart : addItemToCartHandler,
       quantity : addItemQuantity
    };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider