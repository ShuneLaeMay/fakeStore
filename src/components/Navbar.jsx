import React, { useEffect, useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({setItems,items}) => {
  // const nav = useNavigate()
  const [search,setSearch] = useState('')
  const submitHandler = e => {
    e.preventDefault()
    const filterData = items.filter(item => item.title.toLowerCase().includes(search))
    setItems(filterData)
  }
  

  return (
    <div className='flex justify-between w-[80%] mx-auto mt-1 align-middle'>
      <Link to={`/`}>
      <h2 className='text-slate-700 font-semibold text-3xl font-mono'>MoonLovers</h2>
      </Link>
      <div className='relative'>
      <FiSearch className='absolute icon mt-[5px] mx-2 text-lg'/>
      <form onSubmit={submitHandler}>
        <input type="text" value={search} onChange={e=> setSearch(e.target.value)} className='outline-none border-2 border-slate-600 bg-transparent in rounded-lg in' placeholder='Search products'/>
      </form>
      </div>
    </div>
  )
}

export default Navbar
