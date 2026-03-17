import { Link } from "react-router-dom"
import SearchBar from "SearchBar.jsx"
function Navbar() {
  return (
    <nav style={{
      display:"flex",
      justifyContent:"space-between",
      padding:"20px",
      background:"#111",
      color:"white"
    }}>
      <h2>E-commerce-for-electronics</h2>
      <SearchBar/>
      <div style={{textDecoration: "none"}}>
          <Link to="/" style={{marginRight:"20px", color:"white"}}>Home</Link>
          <Link to="/products" style={{marginRight:"20px", color:"white"}}>Products</Link>
          <span>Cart</span>
      </div>
    </nav>
  )
}

export default Navbar