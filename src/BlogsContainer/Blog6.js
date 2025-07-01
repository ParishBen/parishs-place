const Blog6 = () => {
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
      <h2> Udemy</h2>
      <p>
        <t />
        I've jumped around a bit with my learning, but I have found that Udemy
        has been a great resource for me. I have taken a few courses on Udemy
        that have helped me learn new skills and improve my existing ones. The
        courses are well-structured and easy to follow, and the instructors are
        knowledgeable and engaging. I have found that the courses on Udemy are a
        great way to learn new skills and improve my existing ones. I have taken
        courses on a variety of topics, including web development, AI prompt
        engineering, SQL, and AWS. I have found that the courses on Udemy are a
        great way to learn new skills and improve my existing ones. I have taken
        courses on a variety of topics, including web development, AI A-Z &
        prompt engineering, SQL, and AWS
      </p>
      {isNaN(window.location.pathname.split("/").slice(-1)) ? (
        ""
      ) : (
        <button
          id="prev"
          style={{ position: "fixed", left: "2pt" }}
          onClick={() => (window.location.pathname = "/blogs/6")}
        >
          Previous Blog
        </button>
      )}
    </div>
  );
};

export default Blog6;
