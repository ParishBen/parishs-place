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
import Blog6 from './BlogsContainer/Blog6';


class App extends Component {



  render(){
 
  return (
    <Router>
    <div className="App">
      
     <NavBar/> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/parish-pics' element={<ParishPics /> }/>
        <Route path='/projects' element={<Projects /> } />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blogs/1' element={<Blog0/>}/>
        <Route path='/blogs/2' element={<Blog1/>}/>
        <Route path='/blogs/3' element={<Blog2/>}/>
        <Route path='/blogs/4' element={<Blog3/>}/>
        <Route path='/blogs/5' element={<Blog4/>}/>
        <Route path='/blogs/6' element={<Blog5/>}/>
        <Route path='/blogs/7' element={<Blog6/>}/>
        {/* <Route path='*' element={<NoPage/>}/> */}

      </Routes>
      
    </div>
     </Router>
  );
  }
}

export default App;



