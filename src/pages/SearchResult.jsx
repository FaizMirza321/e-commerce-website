import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

function SearchResult(){
  useState [query, setQuery] = useState("") 
    useEffect(() => {
    fetch("http://localhost:9000/products?title=${encodeURIComponent(title)}", )
      .then(res => res.json())
      .then(data => setQuery(data))
  }, [query])


  return(
    <SearchBar />
    

  )
}

export default SearchResult