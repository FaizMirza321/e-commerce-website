import { useEffect, useState } from "react"

function Cart(){


    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/basket?user_id=${encodeURIComponent(user_id)}")
            .then(res => res.json())
            .then(data => setProducts(data))
        }, [products] // call this effect each time the items are removed to render the cart page again
    )
    
    function removeProduct (title){
        fetch("http://localhost:9000/delete?item_id=${encodeURIComponent(item_id)}")
    }

    return(
        // make the values attribute of each item in the cart equal to the effect setItems

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

export default Cart 