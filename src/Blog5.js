
const Blog5 = () => {
    return (
        // <div  /*style={{backgroundColor:'#ad9c3a', position:'relative',top:'12pt'}}*/>
         <div class="container-fluid" style={{backgroundColor:'gold', boxShadow: '0 0 20px black',textAlign:'center', paddingBottom: '10px', paddingLeft:'3pt' }}>

            <h2> Project Piece - NYC Bands Tribute</h2>
            <p><t/>One of my main hindrances for this project was just settling on a subject that holds my true interest and would make sense in the framework. This past year definitely got me thinking on how much fun and impactful live performances can be. So I set out to do a project that could be duplicated for any city via a list from non other than the source of truth itself, Wikipedia. I initially wanted to scrape or API the data, but since I was already delayed in coming onto this project start I settled for copying the list. Which brings me to the topic of the importance of wireframing/sketching out how the project will look before diving in. I learned this the hard way. I tried getting a jump on some Components prior to fully framing out where things should sit and where certain Routes should be defined. This was a good learning lesson there. The project relies heavily on fetches to Spotify API. To my understanding I needed permissions in the form of an Access token granted via Oauth. I was stuck on this for a good amount of time. But it got me appreciating how open-source the dev community is as I dove into the API docs, YouTube, StackOverflow, etc. I then was ready to jump back into building out the components and properly manage how/where/why state or props would be passed and accessible. I will say the dev tools for React and Also Redux in Chrome were a lifesaver at times to manage what data the Components possessed. And through the power of React Redux and trails and tribulations I ended up with an app that pulls Artists’ images/top tracks and manages your favorites while playing some preview audio. Definitely has areas to build upon but I’m proud of the progress nonetheless!</p>
        </div>
    )
}

export default Blog5



