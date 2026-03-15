import { useEffect, useState } from "react"

function CreateListing(){
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();


  return (
    <div>
      <Navbar />

      <h2 style={{textAlign:"center"}}>Create a Listing</h2>
      <div class="image-uploader">
        <label for="file-input" class="upload-label">
            <img id="preview" src="../assets/upload_img.png" alt="Upload Image" />
            <span class="upload-text">Click to upload</span>
        </label>
        <input id="file-input" type="file" accept="image/*" hidden value={ image } onChange={ e => setImage(e.target.value)}/>
      </div>
      <div class="item-info">
        <label for="title">
          <span className="title-text">Title</span>
        </label>
        <input id="title" type="text" placeholder="title name" value={ title } onChange={ e => setTitle(e.target.value)}/>

        <label for="brand">
          <span className="-text">Title</span>
        </label>
        <input id="brand" type="text" placeholder="" value={ brand } onChange={ e => setBrand(e.target.value)}/>

        <label for="category">
          <span className="-text">Title</span>
        </label>
        <input id="category" type="text" placeholder="category" value={ category } onChange={ e => setCategory(e.target.value)}/>

        <label for="price">
          <span className="price-text">Price</span>
        </label>
        <input id="price" type="text" placeholder="0.00" value={ price } onChange={ e => setPrice(e.target.value)}/>

        <label for="stock">
          <span className="-text">Title</span>
        </label>
        <input id="stock" type="text" placeholder="stock" value={ stock } onChange={ e => setStock(e.target.value)}/>

        <label for="description">
          <span className="description-text">Description</span>
        </label>
        <input id="description" type="text" placeholder="description text" value={ description } onChange={ e => setDescription(e.target.value)}/>
      </div>
    </div>
  )
}
