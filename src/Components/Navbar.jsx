import '../Styles/Nav.css'

function Navbar() {
  return (
    <nav style={{
        display:'flex',
        height:'60px',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#425907'
        }}
        className='navbar'>
        <div style={{width:'25%', textAlign:'center'}} className='left'>
           <a href="/" style={{
            textDecoration:'none'
           }}> <h1 style={{fontWeight:700, color:'white'}}>Thailand<span style={{fontWeight:700, color:'#a8d631'}}>Xpert</span></h1></a>
        </div>
        <div style={{
                width:'50%'}}
             className='list'>
            <ul style={{
                listStyle:'none',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-around',
                color:'white',
                }}>
                <li style={{cursor:'pointer'}}>Home</li>
                <li style={{cursor:'pointer'}}>Visa</li>
                <li style={{cursor:'pointer'}}>Blog</li>
            </ul>
        </div>
        <div style={{
            width:'25%',
            display:'flex',
            alignItems:'center',
            justifyContent:'end'
            }}
            className='right'>
                <button style={{
                    backgroundColor:'#04240e',
                    color:'white',
                    padding:'10px',
                    borderRadius: '10px',
                    border:0,
                    marginRight:'1rem',
                    cursor:'pointer'
                }}
                className='navbtn'>List your Business</button>
        </div>
    </nav>
  )
}

export default Navbar