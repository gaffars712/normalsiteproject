import React from 'react'
import { Link } from 'react-router-dom';

const Home = () =>{


    return(
        <>
        <div className='container  ' style={{display:"flex",justifyContent:"center", height:"auto", width:"100%",marginTop:"8rem",alignItems:"center"}}> 
        <div className='row' style={{marginLeft:"3rem"}}>
        <div  className='col-10 col-md-6 mx-auto' style={{marginTop:"5.5rem"}}>
            <div><h1>Grow Your Business With<br/> <span><Link to={"https://www.faimsoft.com/"} target='_black' style={{fontSize:"2.5rem", textDecorationLine:"none"}}> FaimSoft</Link></span></h1></div>
            <div><h4>We are the team of talented devloper making websites</h4></div>
            <div> <Link to={'/contact'}><button className='btn btn-outline-primary '  style={{borderRadius:"5rem",fontSize:"1rem", padding:"0.2rem 0.8rem 0.2rem 0.9rem "}} >  Get Started </button> </Link></div>
            
            
            
            </div>
            <div className='col-10 col-md-6 '>
                <div>
                    <img className='img11' alt='aboutimg' style={{width:"350px",marginTop:"3rem"}} src='https://img.freepik.com/premium-vector/programmer-coding-laptop-software-developer-work-with-business-project-structures-systems-analyzing-data-program-development-concept-flat-vector-illustration-isolated-white-background_633472-597.jpg?w=410'></img>
                </div>
            </div>
            </div>
            </div>
        </>
    )
};
export default Home;