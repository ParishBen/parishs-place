import logo from './logo.svg';
import './App.css';
//import ConfettiExplosion from '@reonomy/react-confetti-explosion';
import * as React from 'react';
//import ReactCanvasConfetti from 'react-canvas-confetti';
import Realistic from './RealisticConfetti';

const bigExplodeProps = {
  force: 0.6,
  duration: 3000,
  particleCount: 200,
  floorHeight: 1500,
  floorWidth: 1800
}

const button = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateY(-50%) translateX(-50%)',
  padding: '20px 40px',
  color: 'white',
  backgroundColor: '#36634d',
  fontFamily: 'sans-serif',
  textTransform: 'uppercase',
  letterSpacing: 1,
  fontWeight: 'bold',
  border: '2px solid white',
  borderRadius: 4,
  boxShadow: '0 0 20px black',
  cursor: 'pointer',
}

function App() {
  return (
    <div className="App">
      <Realistic/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src= "https://live.staticflickr.com/65535/51823489824_ca33c82976.jpg" width="500" height="480" alt="Miss Rory Santa Clause" title="Miss Rory Santa Clause"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React 
        </a>

      </header>
    </div>
  );
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