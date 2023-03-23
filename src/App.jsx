import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Details from './components/Details'

function App() {
  const [items,setItems] = useState([]);
  // const filterData = items.filter(item => item.title.toLowerCase().includes(search))
  // console.log(filterData);
  useEffect(() => {
    fetchItem()
  },[])
  const fetchItem = async() => {
    const api = await fetch (`https://fakestoreapi.com/products`)
    const data = await api.json();
    console.log(data);
    setItems(data);
    console.log(data)
  }  

  return (
    <div className="App">
      <Navbar setItems={setItems} items={items}/>
      <Routes>
        <Route path='/' element={<Products products={items}/>} />
        <Route path='/detail/:id' element={<Details/>}/>
      </Routes>
      
    </div>
  )
}

export default App
