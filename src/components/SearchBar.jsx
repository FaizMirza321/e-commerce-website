import { useEffect, useState } from "react"
function SearchBar(){
    const [title, setTitle] = useState("");

    const handleSearch = async () => {
        const res = await fetch(`/products?title=${encodeURIComponent(title)}`);
        const data = await res.json();
        console.log(data);
    };

    return(
        <form>
            <input
            type="text"
            value={ title }
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Search product..."
            />
            <button onClick={handleSearch}>Search</button>
        </form>
  );
}

export default SearchBar