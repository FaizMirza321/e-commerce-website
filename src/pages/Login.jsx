import { useEffect, useState } from "react"

function Login(){
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

    const onSubmitLogin = async e => {
        try {
          const body = { name, password }
          const response = fetch("http://localhost:9000/login", {
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

        <h2 style={{textAlign:"center"}}>Login</h2>
        <form onSubmit={ onSubmitLogin }>
          <input type="text" placeholder="username" value={ name } onChange={ e => setName(e.target.value)}/>
          <input type="password" placeholder="password" value={ password } onChange={ e => setPassword(e.target.value)}/>
          <button type="submit">Register</button>
        </form>

      </div>
  )
}
export default Login