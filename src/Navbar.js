import React from 'react';
import { NavLink } from 'react-router-dom';

// transform: 'translateY(-50%) translateX(-50%)',
//   padding: '20px 40px',
//   color: 'white',
//   backgroundColor: '#36634d',
//   fontFamily: 'sans-serif',
//   textTransform: 'uppercase',
//   letterSpacing: 1,
//   fontWeight: 'bold',
//   border: '2px solid white',
//   borderRadius: 4,
//   boxShadow: '0 0 20px black',
//   cursor: 'pointer',



    
    
     

      

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-xl navbar-light bg-light">
    <div class="container-fluid" style={{backgroundColor:'floralwhite', boxShadow: '0 0 20px black', cursor: 'pointer',textTransform:'uppercase',textAlign:'center', paddingBottom: '10px', paddingLeft:'3pt' }}>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse show" id="navbarNavAltMarkup">
    <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
          {/* <NavLink 
        style={{ marginRight: '10px', transform:'translateY(-50%) translateX(-50%)' }} 
        activeStyle={{background: 'darkblue', color: 'white'}}
        to='/'
        exact
      > */}
        {/* Home
      </NavLink> */}
        <li class="nav-item">
          <a class="nav-link" href="/parish-pics">Parish Pics</a>
        </li>
      {/* <NavLink 
        
        style={{ marginRight: '10px' }} 
        to="/parish-pics"
        exact
      > */}
        {/* Parish Pics
      </NavLink> */}
      <li class="nav-item">
          <a class="nav-link" href="/projects">Projects</a>
        </li>
      {/* <NavLink
        style={{ marginRight: '10px' }} 
        activeStyle={{background: 'darkblue', color: 'white'}}
        to="/projects"
        exact
        >
        Projects
      </NavLink> */}
       <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/blogs" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blogs
          </a>
          <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/blogs">Blog1</a></li>
            <li><a class="dropdown-item" href="/blogs">Another Blog</a></li>
            <li><a class="dropdown-item" href="/blogs">Additional Blog</a></li>
          </ul>
         </li>
        </ul>
        </div>
     </div>
   </nav>
  );
}



export default NavBar;