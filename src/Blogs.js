import Blog0 from "./BlogsContainer/Blog0"
import Blog1 from "./BlogsContainer/Blog1"
import Blog2 from "./BlogsContainer/Blog2"
import Blog3 from "./BlogsContainer/Blog3"
import Blog4 from "./BlogsContainer/Blog4"
import Blog5 from "./BlogsContainer/Blog5"
import Blog6 from "./BlogsContainer/Blog6"


const blogComponents = [Blog0, Blog1, Blog2, Blog3, Blog4, Blog5, Blog6];

const Blogs = () => {
    return (
        <div className="container-fluid" style={{backgroundColor:'lightseagreen', boxShadow: '0 0 20px black',textAlign:'center', paddingBottom: '10px', paddingLeft:'3pt' }}>
            <ul style={{listStyle:'none'}}>
                {blogComponents.map((BlogComponent, idx) => (
                    <li key={idx}><BlogComponent /></li>
                ))}
            </ul>
        </div>
    )
}
export default Blogs

