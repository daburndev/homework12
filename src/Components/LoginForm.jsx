import { useState, useEffect } from 'react'
import '../Styles/Login.css'
import { useNavigate } from 'react-router-dom';
import HomePage from '../Pages/HomePage';

function LoginForm() {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState("");

  const handleClick = ()=> {
    if( id == "admin" && password == "123123"){
      setLogin("Login Successfully");
      alert('Log in Success')
      // navigate(`/home?id=${id}&password=${password}`)
      sessionStorage.setItem("ID", id)
      sessionStorage.setItem("Password", password)
      navigate("/home")
    }else {
      setLogin("Login Fail");
      alert('Login Failed')
      setId("")
      setPassword("")
    }
  };

  useEffect(()=> {
    const id = sessionStorage.getItem("ID")
    const password = sessionStorage.getItem("Password")
    if(!id && !password) {
      navigate("/")
    }  else {
      navigate("/home")
    }
  },[])
  return (

    <div style={{
    display:'flex',
    flexDirection:'column',
    alignContent:'center',
    justifyContent:'center',
    textAlign:'center',
    width:'100%',
    height:'100vh',
    }}>
      <h1 style={{color:'#0e4841'}}>Login</h1>
      <input type="text" 
      style={{width:'250px',
              margin:'0 auto',
              marginBottom:'1rem',
              borderRadius:'15px',
              padding:'10px'}}
              placeholder='Enter Username'
              value={id}
              onChange={(e) => setId(e.target.value)} />
      <input type="password" 
      style={{width:'250px',
              margin:'0 auto',
              marginBottom:'1rem',
              borderRadius:'15px',              
              padding:'10px'}}
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
      <button 
      onClick={handleClick}
      className='btn'>Sign In</button>
    </div>
  )
}

export default LoginForm