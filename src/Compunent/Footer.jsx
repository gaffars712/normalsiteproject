import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () =>{
const data = new Date().getFullYear()
console.log(data)
    return(

        <>
        <div className='text-center mt-5'>
        <p> &#169; {data} FaimSoft All Rights Reserved  <strong className='text-primary' style={{cursor:"pointer"}}> Terms   </strong>And   <strong className='text-primary' style={{cursor:"pointer"}}>Conditions </strong>.</p>
        </div>
        
        </>
    )
};
export default Footer;