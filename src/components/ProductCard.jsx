function ProductCard({ product }) {
  return (
    <div style={{
      border:"1px solid #ddd",
      padding:"20px",
      borderRadius:"10px",
      textAlign:"center"
    }}>
      <img
        src={product.image}
        alt={product.title}
        style={{width:"150px"}}
      />

      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard