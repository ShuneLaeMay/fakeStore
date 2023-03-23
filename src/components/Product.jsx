import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

const Product = ({id,title,image,price}) => {
  return (
    <div className='bg-slate-100 '>
     <div className=' w-64 rounded-lg shadow'>
     <img className='photo w-[200px] h-[200px] object-cover mx-auto mb-2' src={image}  />
     <div className='m-4'>
      <p className='tit'>{title.substring(0,25)}.....</p>
      <p className='pri'>{price}</p>
      <button className='add px-6 py-1 bg-slate-600 shadow rounded mr-1 text-white'>Add to cart</button>
      <Link to={`/detail/${id}`}>
      <button className='detail px-6 py-1 bg-slate-600 shadow rounded text-white'>Detail</button>
      </Link>
      </div>
      <div>
      </div>
     </div>
    </div>
  )
}

export default Product
