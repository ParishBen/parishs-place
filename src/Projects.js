import React from 'react';

const Projects = () => {
    return (
        <div style={{backgroundColor:'darkgoldenrod', position:'relative',top:'20pt'}}>
        <h3>Body of Work</h3>
        <p> Current Project(s)
            Green Globe Trotter: Plan your next vacation's flights with the greenest option! 
        </p>
        <t/> <h6>WIP...More links and projects to be listed..</h6>
        <ul style={{listStyle:'none'}}>
            <li style={{textAlign:'center'}}>
                Nyc Bands Showcase <br/>
                <a href="https://www.github.com/ParishBen/nyc-bands-showcase" target='_blank' rel="noopener noreferrer">Github front end</a><br/>
                <a href="https://www.github.com/ParishBen/nyc-bands-showcase-backend" target='_blank' rel="noopener noreferrer">Github back end</a><br/>

            </li>
            <li> Brewery Passport</li>
            <li> Planters' Digest</li>
            <li> Zoo Viewer</li>
        </ul>
        </div>
    )
}

export default Projects