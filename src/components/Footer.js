import React from 'react'
import { FaFacebook ,FaInstagram,FaYoutube,FaWhatsapp} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='d-flex justify-content-between bg-primary text-white'>
        <h1 className='m-3 p-3'>The Generics</h1>
        <div className='m-3 p-3'>
        <FaFacebook  size={30}/> <FaInstagram size={30}/> <FaYoutube size={30}/> <FaWhatsapp size={30}/>   
        </div>
             
    </div>
  )
}

export default Footer