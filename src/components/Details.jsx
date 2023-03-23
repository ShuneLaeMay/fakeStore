import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const [items,setItems] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetchData()
    },[])
    const fetchData = async() => {
        const api = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await api.json()
        setItems(data)
    }
  return (
    <div>
      <div className='w-[80%] bg-slate-100  mx-auto flex justify-around rounded-lg shadow-md'>
     <img className='photo w-[250px]   my-6' src={items.image}  />
     <div className='m-4'>
      <p className='tit text-2xl font-serif text-slate-700'>{items.title}</p>
      <p className='pri text-2xl font-serif text-slate-700'>{items.price}</p>
    </div>
    </div>
    </div>

  )
}

export default Details
