function Orders(){


    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/orders?user_id=${encodeURIComponent(user_id)}")
            .then(res => res.json())
            .then(data => setProducts(data))
        }, []
    )

    return(

        <div className="cart">
            <section className="items" style={{
                display:"grid",
                gridTemplateColumns:"repeat(1,1fr)",
                gap:"20px",
                padding:"40px"
            }}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </section>
            <section className="total">

            </section>
        </div>
    )
}

export default Orders