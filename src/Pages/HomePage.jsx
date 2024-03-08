import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Welcome from '../Components/Welcome'
import { useLocation, useNavigate } from 'react-router-dom'

function HomePage() {
  // const location = useLocation();
  // const [id, setId] = useState("");
  // const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // useEffect(()=> {
  //   const searchParams = new URLSearchParams(location.search)
  //   console.log(searchParams)
  //   setId(searchParams.get("id"))
  //   setPassword(searchParams.get("password"))
  // },[])

  
  return (
    <div>
        <Navbar/>
        <Welcome/>
        <Footer/>
    </div>
  )
}

export default HomePage