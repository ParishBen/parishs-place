import React from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
}

export default class Realistic extends React.Component {
  constructor(props) {
    super(props);
    this.animationInstance = null;
  }

componentDidMount(){
    this.handlerFire()
    this.handlerFire2()
    this.handlerFire3()
}

  makeShot = (particleRatio, opts) => {
     // console.log(this.animationInstance)
    this.animationInstance && this.animationInstance({
      ...opts,
      origin: {  y: 0.7 },
      particleCount: Math.floor(200 * particleRatio),
    });
  }
  leftShot = (particleRatio, opts) => {
    // console.log(this.animationInstance)
   this.animationInstance && this.animationInstance({
     ...opts,
     origin: { x:0.0, y: 0.7 },
     particleCount: Math.floor(200 * particleRatio),
   });
 }
 rightShot = (particleRatio, opts) => {
    // console.log(this.animationInstance)
   this.animationInstance && this.animationInstance({
     ...opts,
     origin: { x:1.0, y: 0.7 },
     particleCount: Math.floor(200 * particleRatio),
   });
 }

  fire = () => {
     // console.log(this.animationInstance)
    this.makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
      origin: 'x:0.0'
    });

    this.makeShot(0.2, {
      spread: 60,
    });

    this.makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }
  fireLeft = () => {
    // console.log(this.animationInstance)
   this.leftShot(0.25, {
     spread: 26,
     startVelocity: 55,
     origin: 'x:0.0'
   });

   this.leftShot(0.2, {
     spread: 60,
   });

   this.leftShot(0.35, {
     spread: 100,
     decay: 0.91,
     scalar: 0.8,
   });
//
   this.leftShot(0.1, {
     spread: 120,
     startVelocity: 25,
     decay: 0.92,
     scalar: 1.2,
   });

   this.leftShot(0.1, {
     spread: 120,
     startVelocity: 45,
   });
 }

 fireRight = () => {
    // console.log(this.animationInstance)
   this.rightShot(0.25, {
     spread: 26,
     startVelocity: 55,
     origin: 'x:0.0'
   });

   this.rightShot(0.2, {
     spread: 60,
   });

   this.rightShot(0.35, {
     spread: 100,
     decay: 0.91,
     scalar: 0.8,
   });

   this.rightShot(0.1, {
     spread: 120,
     startVelocity: 25,
     decay: 0.92,
     scalar: 1.2,
   });

   this.rightShot(0.1, {
     spread: 120,
     startVelocity: 45,
   });
 }


  handlerFire = () => {
    this.fire();
  };
  handlerFire2 = () => {
      this.fireLeft();
  }
  handlerFire3 = () => {
      this.fireRight();
  }

  getInstance = (instance) => {
    this.animationInstance = instance;
  };

  render() {
    return (
      <>
        {/* <div onClick={this.handlerFire}>Fire</div> */}
        <ReactCanvasConfetti refConfetti={this.getInstance} style={canvasStyles}/>
      </>
    );
  }
}