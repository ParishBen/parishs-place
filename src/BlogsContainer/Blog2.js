const Blog2 = () => {
  return (
    <div
      class="container-fluid"
      style={{
        backgroundColor: "gold",
        boxShadow: "0 0 20px black",
        textAlign: "center",
        paddingBottom: "10px",
        paddingLeft: "3pt",
      }}
    >
      <h2> First Project! CLI Gem - ZooViewer</h2>
      <p>
        <t />
        Well I certainly hit roadblocks along the way on this to get the gem
        running, but hey persistence paid off! I was bouncing ideas around about
        different websites and different APIs to use. I dove into a good 2-3
        sites/APIs and went down some rabbit holes along the way, but hey every
        learning experience is a good one. I ended up choosing one that satifies
        the requirements and had a nice HTML format to allowing a ‘clean’
        scraping experience. I definitely get a picture of how unique the
        scraping experience from website to website. Aside from some website
        woes I had some funky WSL terminal issues, which in my opinion were the
        biggest time trap. For some reason, my bundled gem wouldn’t produce a
        functional gemfile and/or module to build classes off of if my terminal
        in VSC started in “WSL” rather than “WSL - Ubuntu bash”. Could be user
        error over here, but I had a huge breath of fresh air once I started
        everything on a clean WSL-Ubuntu bash. It was worth the trial and error!
        <br />
        <t />
        Albeit the product is a somewhat basic gem that scrapes one site &
        displays a user input, I’m very happy and proud to see it working. For
        me, this project’s trial and errors really invigorated my learning
        process. It’s a great way to see there’s so many ways and methods out
        there to experiment and implement. If I find time, I’d still like to try
        to get some of the other sites I got hung up on to make similar gem
        variations. The scraping process of finding a way to only scrape only
        once to create a single object with ‘x’ amount of properties is a nice
        challenge, but gathering a greater understanding of it on a solo project
        was very valuable. I see it as I need practice practice, and more
        practice! I found it very useful attending open office hours to obtain
        great direction, but also to see what other methods are being used out
        there. It was a nice way to collaborate along the way. It’s also quite
        important to know how far you’ve come & celebrate the little victories
        along the way (like getting a CLI gem up and running)
      </p>
      {isNaN(window.location.pathname.split("/").slice(-1)) ? (
        ""
      ) : (
        <button
          id="prev"
          style={{ position: "fixed", left: "2pt" }}
          onClick={() => (window.location.pathname = "/blogs/2")}
        >
          Previous Blog
        </button>
      )}
      {isNaN(window.location.pathname.split("/").slice(-1)) ? (
        ""
      ) : (
        <button
          id="next"
          style={{ position: "fixed", right: "2pt" }}
          onClick={() => (window.location.pathname = "/blogs/4")}
        >
          Next Blog
        </button>
      )}
    </div>
  );
};
export default Blog2;
