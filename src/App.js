import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Heading from './components/Heading';
import NavBar from './components/NavBar';
import Product from './components/Product';
import Cart from './components/Cart';
import CartProvider from './components/store/CartProvider';
function App() {
  const [show,setShow]=useState(false);

  const showCartHandler=()=>{
    setShow(true);
  }
  const hideCartHandler=()=>{
    setShow(false);
  }
  return (
    <div className="App">
      <CartProvider>
      <NavBar onOpen={showCartHandler}/>
      {show ? <Cart onClose={hideCartHandler}/> :''}      
      <Heading/>
      <Product/>
      </CartProvider>
      <Footer/>
    </div>
  );
}

export default App;
