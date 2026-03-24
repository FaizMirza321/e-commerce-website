
function Listings(){

    fetch("http://localhost:9000/listings?user_id=${encodeURIComponent(user_id)}")
    
    return(
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

export default Listings