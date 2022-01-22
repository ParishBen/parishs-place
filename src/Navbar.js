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
    <div className='navbar'  style={{backgroundColor:'floralwhite',position:'absolute', top: '15px', width:'100%', boxShadow: '0 0 20px black', cursor: 'pointer',textTransform:'uppercase',textAlign:'center', paddingBottom: '10px', paddingLeft:'3pt' }}>
      <span style={{   fontWeight: 'bold'}}>
          <NavLink 
        style={{ marginRight: '10px', transform:'translateY(-50%) translateX(-50%)' }} 
        activeStyle={{background: 'darkblue', color: 'white'}}
        to='/'
        exact
      >
        Home
      </NavLink>
      <NavLink 
        
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