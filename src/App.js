import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//import ReactCanvasConfetti from 'react-canvas-confetti';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './Navbar';
import ParishPics from './ParishPics';
import Projects from './Projects';

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
  return (
    <Router>
    <div className="App">
      
    <NavBar/>
      <Routes>
       <Route path='/parish-pics' element={<ParishPics /> }/>
       <Route path='/projects' element={<Projects /> } />
     </Routes>
      <header className="App-header">
        <p>
          Hey there! Just a heads up this is still a great work in progress. I'm having fun making progress every chance I get.
            <br/> Keep checking back for new content!
        </p>
        <img src={logo} className="App-logo" alt="logo" />

    

      </header>
      
    </div>
     </Router>
  );
  }
}



export default App;

//const [isExploding, setIsExploding] = React.useState(true);
/* <div
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