import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function Products() {    

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:9000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <Navbar />

      <h1 style={{textAlign:"center"}}>Products</h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"20px",
        padding:"40px"
      }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>

    </div>

  )
}

export default Products