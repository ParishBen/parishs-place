import React from "react";
import Realistic from "./RealisticConfetti";


const ParishPics = () => {
    return(
        <div style={{position:'relative', top:'20pt', textAlign:'center', backgroundColor:'darkgoldenrod'}}>
            <Realistic/>
            <p style={{fontWeight:'bolder',color:'white'}}><em> Although '20-'21 has been really trying on so many - it brought us this precious bundle of joy!!</em></p>
            <ul style={{listStyle: "none"}}><li><img src= "https://live.staticflickr.com/65535/51823489824_ca33c82976.jpg" width="500" height="480" title="Miss Rory Santa Clause" /></li></ul>



        </div>
    )
}

export default ParishPics;