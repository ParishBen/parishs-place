import Blog0 from "./BlogsContainer/Blog0"
import Blog1 from "./BlogsContainer/Blog1"
import Blog2 from "./BlogsContainer/Blog2"
import Blog3 from "./BlogsContainer/Blog3"
import Blog4 from "./BlogsContainer/Blog4"
import Blog5 from "./BlogsContainer/Blog5"
import Blog6 from "./BlogsContainer/Blog6"

const Blogs = () => {
    return (
        <>
        <div class="container-fluid" style={{backgroundColor:'lightseagreen', boxShadow: '0 0 20px black',textAlign:'center', paddingBottom: '10px', paddingLeft:'3pt' }}>
            <ul style={{listStyle:'none'}}>
        {/* <span style={{backgroundColor:'#ad9c3a', position:'relative',top:'12pt'}}> */}
                <li><Blog0/></li>
                <li><Blog1/></li>
                <li><Blog2/></li>
                <li><Blog3/></li>
                <li><Blog4/></li>
                <li><Blog5/></li>
                <li><Blog6/></li>
        {/* </span> */}
            </ul>
        </div></>
    )
}
export default Blogs

