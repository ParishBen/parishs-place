import Blog1 from "./Blog1"
import Blog2 from "./Blog2"
import Blog3 from "./Blog3"

const Blogs = () => {
    return (
        <><span style={{backgroundColor:'#ad9c3a', position:'relative',top:'12pt'}}>
            <ul style={{listStyle:'none'}}>
                <li><Blog1/></li>
                <li><Blog2/></li>
                <li><Blog3/></li>
            </ul>
        </span></>

    )
}
export default Blogs

