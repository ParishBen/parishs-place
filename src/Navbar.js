import React from 'react';
 import { Link } from 'react-router-dom';
import './index.css'

const NavBar = () => {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{height:'25pt', marginBottom:'5pt'}}>
     <div class="container-fluid" style={{backgroundColor:'floralwhite', boxShadow: '0 0 20px black', cursor: 'pointer',textTransform:'uppercase',textAlign:'center', paddingBottom: '10px', paddingLeft:'3pt' }}>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
        <div class="collapse navbar-collapse show" id="navbarNavAltMarkup">
          <ul class="navbar-nav">
            <li class="nav-item">
               <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="/parish-pics">Parish Pics</Link>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to="/projects">Projects</Link>
            </li>
            <li class="nav-item dropdown">
               <Link  class="nav-link dropdown-toggle"  id="navbarDarkDropdownMenuLink" role="link" data-bs-toggle="dropdown" aria-expanded="false" to="/blogs">Blogs</Link>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><Link class="dropdown-item" to="/blogs">All Blogs</Link></li>
                <li><Link class="dropdown-item" to="/blogs/1">Blog 1</Link></li>
                <li><Link class="dropdown-item" to="/blogs/2">Blog 2</Link></li>
                <li><Link class="dropdown-item" to="/blogs/3">Blog 3</Link></li>
              </ul>
           </li>
         </ul>
       </div>
     </div>
   </nav>
  );
}

export default NavBar;