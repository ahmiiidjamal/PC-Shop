import Nav from './components/layout/nav'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Product from './pages/product'
import ProductOne from './pages/productOne'
import Card from './pages/card'
import Footer from './components/layout/footer'
import ContextCard from './hooks/useContext'
function App() {
  return (
    <>
        <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product/>}/>
        <Route path='/productOne/:id' element={<ProductOne/>}/>
        <Route path='/card' element={<Card/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App