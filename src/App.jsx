import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import CreateListing from './pages/CreateListing'
import Cart from './pages/Cart'

function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
