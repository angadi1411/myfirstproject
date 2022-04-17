import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
const Navbar = () => {
  return (
    <div>
       <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-warning text-dark" >
     
     <div class="container-fluid"  >
       <Link class="navbar-brand" to="#"> DIVORCE LAWYERS </Link>
   
       <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
             <Link class="nav-link" to="/Home">Home</Link>
           </li>
        
       
         </ul>
         CALL US :800-123-4567
    
     
       </div>
     </div>
   </nav>
    </div>
    </div>
  )
}

export default Navbar