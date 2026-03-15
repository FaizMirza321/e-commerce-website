import { useEffect, useState } from "react"
function Register(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitRegister = async e => {
        try {
            const body = { name, password }
            const response = fetch("http://localhost:9000/register", {
                method: "POST",
                headers: {"Content-Type:": "application/json"},
                body: JSON.stringify(body)
            })
        } catch (error) {
            
        }
    
    }

    return (
    <div>
      <Navbar />

      <h2 style={{textAlign:"center"}}>Register</h2>
      <form onSubmit={ onSubmitRegister }>
        <input type="text" placeholder="username" value={ name } onChange={ e => setName(e.target.value)}/>
        <input type="password" placeholder="password" value={ password } onChange={ e => setName(e.target.value)}/>
        <input type="password" placeholder="confirm password"/>
        <button type="submit">Register</button>
      </form>

    </div>
  )
}