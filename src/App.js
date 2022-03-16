import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//import ReactCanvasConfetti from 'react-canvas-confetti';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './Navbar';
import ParishPics from './ParishPics';
import Projects from './Projects';
import Blogs from './Blogs.js';
import Blog2 from './BlogsContainer/Blog2';
import Blog1 from './BlogsContainer/Blog1';
import Blog0 from './BlogsContainer/Blog0';
import Home from './Home';
import Blog3 from './BlogsContainer/Blog3';
import Blog4 from './BlogsContainer/Blog4';
import Blog5 from './BlogsContainer/Blog5';
// const bigExplodeProps = {
//   force: 0.6,
//   duration: 3000,
//   particleCount: 200,
//   floorHeight: 1500,
//   floorWidth: 1800
// }

// const button = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translateY(-50%) translateX(-50%)',
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
// }

  
// }


class App extends Component {

  // renderer=()=>{
  // if(window.location.href == 'http://localhost:3000/' || window.location.href == 'https://blog-of-ben.netlify.app/'){
  //   return <WIP/>
  // }} 

  render(){
    // <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
  return (
    <Router>
    <div className="App">
      
     <NavBar/> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/parish-pics' element={<ParishPics /> }/>
        <Route path='/projects' element={<Projects /> } />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/1' element={<Blog0/>}/>
        <Route path='/blogs/2' element={<Blog1 />}/>
        <Route path='/blogs/3' element={<Blog2 />}/>
        <Route path='/blogs/4' element={<Blog3 />}/>
        <Route path='/blogs/5' element={<Blog4 />}/>
        <Route path='/blogs/6' element={<Blog5 />}/>

      </Routes>
      
    </div>
     </Router>
  );
  }
}

export default App;


/*//const [isExploding, setIsExploding] = React.useState(true);
 <div
//type="button"
onLoad={() => setIsExploding(!isExploding)}
//style={button}
>
{isExploding && (
      <div style={{position:'absolute',top:'10%',
      left:'50%'}}>
        <ConfettiExplosion {...bigExplodeProps} />
      </div>
    )}
</div>  */

