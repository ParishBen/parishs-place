import React from 'react';
import WIP from './WIP'
import { useState } from 'react'

function useHover() {
  const [hovering, setHovering] = useState(false)
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  }
  return [hovering, onHoverProps]
}


// return (
//     <div>
//       <button  {...buttonAHoverProps}>
//         {buttonAIsHovering ? "button A hovering" : "try hovering here"}
//       </button>
//       <button  {...buttonBHoverProps}>
//         {buttonBIsHovering ? "button B hovering" : "try hovering here"}
//       </button>
//     </div>
//   )
// }

const Projects = () => {
    const [listAIsHovering, listAHoverProps] = useHover()
    const [listBIsHovering, listBHoverProps] = useHover()
    const [listCIsHovering, listCHoverProps] = useHover()
    const [listDIsHovering, listDHoverProps] = useHover()

    //const [buttonBIsHovering, buttonBHoverProps] = useHover()

    return (
        <div style={{backgroundColor:'darkgoldenrod', position:'relative',top:'20pt'}}>
            
        <h3>Body of Work</h3>
        <p> Current Project(s)
            Green Globe Trotter: Plan your next vacation's flights with the lightest carbon footprint option! 
        </p>
        <t/> <h5>WIP...More links, interests, awesome projects, and progress to be listed soon!</h5>
        <ul style={{listStyle:'none'}}>
            <li> Some kick off examples below..</li>
            <li {...listAHoverProps} >{listAIsHovering ?  <span  id='listtext' style={{  backgroundColor:'orange', color:'brown', fontWeight:'bold', textTransform:'uppercase'}}> NYC Bands Showcase</span> : <span  id='listtext' style={{  backgroundColor:'orange', color:'brown', fontWeight:'bold'}}> NYC Bands Showcase</span>}</li> 
                <a href="https://www.github.com/ParishBen/nyc-bands-showcase" target='_blank' rel="noopener noreferrer">Github front end</a><br/>
                <a href="https://www.github.com/ParishBen/nyc-bands-showcase-backend" target='_blank' rel="noopener noreferrer">Github back end</a><br/>
            <li {...listBHoverProps} >{listBIsHovering ?  <span  id='listtext' style={{  backgroundColor:'orange', color:'brown', fontWeight:'bold', textTransform:'uppercase'}}> Brewery Passport</span> : <span  id='listtext' style={{  backgroundColor:'orange', color:'brown', fontWeight:'bold'}}> Brewery Passport</span>}</li>
            <li {...listCHoverProps} >{listCIsHovering ?  <span  id='listtext' style={{  backgroundColor:'orange', color:'brown', fontWeight:'bold', textTransform:'uppercase'}}> Planters' Digest</span> : <span  id='listtext' style={{  backgroundColor:'orange', color:'brown', fontWeight:'bold'}}> Planters' Digest</span>}</li>
            <li {...listDHoverProps} >{listDIsHovering ?  <span  id='listtext' style={{  backgroundColor:'orange', color:'brown', fontWeight:'bold', textTransform:'uppercase'}}> Zoo Viewer</span> : <span  id='listtext' style={{  backgroundColor:'orange', color:'brown', fontWeight:'bold'}}> Zoo Viewer</span>}</li>
        </ul>
        </div>
    )
}

export default Projects