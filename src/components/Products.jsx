import React, { useEffect, useState } from 'react'
import Product from './Product';

const Products = ({products}) => {
  // const [items,setItems] = useState([]);
  // useEffect(() => {
  //   fetchItem()
  // },[])
  // const fetchItem = async() => {
  //   const api = await fetch (`https://fakestoreapi.com/products`)
  //   const data = await api.json();
  //   console.log(data);
  //   setItems(data);
  //   console.log(data)
  // }
  return (
    

    <div className='flex gap-8 flex-wrap justify-center mt-10 '>
      {products.map(item => {
        return(
          <Product key={item.id} {...item}/>
        )
      })}
    </div>
  )
}

export default Products
