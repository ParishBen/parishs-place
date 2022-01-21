import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='navbar'  style={{position:'absolute', top: '15px', left: '43%',  textAlign:'left', paddingBottom: '10px', paddingLeft:'3pt' }}>
      <span style={{backgroundColor:'floralwhite', borderBottom:'3px solid black'}}>
          <NavLink 
        style={{ marginRight: '10px' }} 
        activeStyle={{background: 'darkblue', color: 'white'}}
        to='/'
        exact
      >
        Home
      </NavLink>
      <NavLink 
        activeStyle={{background: 'darkblue', color: 'white'}}
        style={{ marginRight: '10px' }} 
        to="/parish-pics"
        exact
      >
        Parish Pics
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }} 
        activeStyle={{background: 'darkblue', color: 'white'}}
        to="/projects"
        exact
        >
        Projects
      </NavLink>
       
    </span></div>
  );
}



export default NavBar;