const Blog0 = () => {
  return (
    <div
    class="container-fluid"
      style={{
        backgroundColor: "gold",
        boxShadow: "0 0 20px black",
        textAlign: "center",
        paddingBottom: "10px",
        paddingLeft: "3pt",
      }}>
      {/* <div class="container-fluid" style={{backgroundColor:'lightseagreen', boxShadow: '0 0 20px black',textAlign:'center', paddingBottom: '10px', paddingLeft:'3pt' }}> */}
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bolder",
          textDecoration: "underline",
          fontStyle: "italic",
        }}
      >
        {" "}
        How'd I get on this track?
      </h2>
      <p>
        {" "}
        In University, I studied a subject that was far from Computer Sciences
        in Criminology. Yet, I’ve gradually moved closer and closer to a tech
        role in every position I’ve held since college. I started off working in
        the private sector doing asset protection for a major retailer. I found
        myself time and time again wondering about the tech equipment involved
        and began fixing cameras, connections, securing & maintaining the files
        amongst other small fixes. Then came the investigative software and
        transaction monitoring on the computers that grabbed my attention. The
        report capabilities entwined with and live data and alerts fascinated
        me. I dug into it at a level that they created an entire new position
        for me to conduct these awesome software-based investigations! I was
        entirely a consumer of the software programs and was just discovering my
        curiosity as to how these programs truly ‘operate’ to make my job so
        much easier! It goes without saying you can easily take for granted so
        much hard work in the tech that makes life incredibly more convenient. I
        then jumped into the public sector as a Crime Analyst and found myself
        again losing myself deep in investigations stationed at the monitor.
        Again, being a consumer and developing a greater appreciation of
        incredible programs. One day I eventually ordered some books and
        downloaded some apps to see what all this coding and software jazz was.
        I really was drawn to the problem-solving side of things. Then quickly
        admired the level of creativity and options available when putting those
        problem solving skills to the test. There’s seemingly endless
        possibilities when it comes to tech development which makes it all the
        more exciting of a career path. It will be without a doubt a life-long
        journey of learning and challenging myself, which I’m excited to embark
        on!
      </p>
      {/* </div> */}
      {isNaN(window.location.pathname.split("/").slice(-1)) ? (
        ""
      ) : (
        <button
          id="next"
          style={{ position: "fixed", left: "2pt" }}
          onClick={() => (window.location.pathname = "/blogs/2")}
        >
          Next Blog
        </button>
      )}
    </div>
  );
};
export default Blog0;
