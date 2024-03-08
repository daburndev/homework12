import React from 'react'

function Welcome() {

  
  return (
    <div style={{
        height: '100vh',
        textAlign:'center',
        justifyContent:'center',
        display:'flex',
        flexDirection:'column',
        backgroundColor:'black'
    }}>
        <h1 style={{fontWeight:700, color:'white'}}>Thailand<span style={{fontWeight:700, color:'#a8d631'}}>Xpert</span></h1>
        <p style={{
            color:'white',
            fontSize:'2rem',
            background:'-webkit-linear-gradient(rgb(255, 255, 255), rgb(168, 214, 49))',
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent'
            }}>Your go-to destination for a comprehensive list of services in the heart of Thailand.</p>
        <a href="https://thailandxpert.com" target='_blank'><button style={{
            cursor:'pointer',
            padding:'12px 20px',
            fontSize:'1.1rem',
            backgroundColor:'#fff',
            color:'#333',
            fontWeight:'700',
            borderRadius:'1rem',
            border:'1px solid #333',
            width:'250px',
            margin:'0 auto'
        }}>Check Out Our Site</button></a>
    </div>
  )
}

export default Welcome