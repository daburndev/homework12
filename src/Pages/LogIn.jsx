import Footer from "../Components/Footer";
import LoginForm from "../Components/LoginForm";
import React from 'react'
import Navbar from "../Components/Navbar";

function LogIn() {
  return (
    <div style={{
                display:'flex',
                flexDirection:'column',
                alignContent:'center',
                height:'100vh'}}>
        <Navbar/>
        <LoginForm/>
        <Footer/>
    </div>
  )
}

export default LogIn