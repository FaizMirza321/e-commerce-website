import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
function CreateListing(){
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  //const [image, setImage] = useState();
  /*<div class="image-uploader">
      <label for="file-input" class="upload-label">
          <img id="preview" src="../assets/upload_img.png" alt="Upload Image" />
          <span class="upload-text">Click to upload</span>
      </label>
      <input id="file-input" type="file" accept="image/*" hidden value={ image } onChange={ e => setImage(e.target.value)}/>
    </div>*/
    const onSubmitListing = async e => {
      e.preventDefault();
      const body = { title, brand, category, price, stock, description }
      try {
        await fetch("http://localhost:9000/create-listing", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body)
        })
      } catch (error) {
          console.error("error creating listing after fetch attempt")
      }
    
    }
    // put divs inside the form to make blocks so they can be seperated on different lines for img etc
  return (
    <>
      <Navbar />
      <h2 style={{textAlign:"center"}}>Create a Listing</h2>
      
      <form onSubmit={ onSubmitListing } className="item-info"> 
        <label htmlFor="title">
          <span className="title-text">Title</span>
        </label>
        <input id="title" type="text" placeholder="title name" value={ title } onChange={ e => setTitle(e.target.value)}/>

        <label htmlFor="brand">
          <span className="-text">brand</span>
        </label>
        <input id="brand" type="text" placeholder="" value={ brand } onChange={ e => setBrand(e.target.value)}/>

        <label htmlFor="category">
          <span className="-text">category</span>
        </label>
        <input id="category" type="text" placeholder="category" value={ category } onChange={ e => setCategory(e.target.value)}/>

        <label htmlFor="price">
          <span className="price-text">Price</span>
        </label>
        <input id="price" type="text" placeholder="0.00" value={ price } onChange={ e => setPrice(e.target.value)}/>

        <label htmlFor="stock">
          <span className="-text">stock</span>
        </label>
        <input id="stock" type="text" placeholder="stock" value={ stock } onChange={ e => setStock(e.target.value)}/>

        <label htmlFor="description">
          <span className="description-text">Description</span>
        </label>
        <textarea id="description" type="text" placeholder="description text" value={ description } onChange={ e => setDescription(e.target.value)}/>
        <button type="submit">Submit Listing</button>
      </form>
    </>
  )
}
export default CreateListing