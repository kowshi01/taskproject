import React from 'react'

const Cartcontext = React.createContext({
  items : [],
  addItemCart : (item)=>{},
  quantity : 0,
  addQuantity: (id)=>{}
})

export default Cartcontext