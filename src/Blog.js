import { useParams } from "react-router"
const Blog = ({props}) => {
    let params = useParams()
    //let propp = this.props
    //const {propps} = this.props
    return (
        <div>
            <h2> Generic Blog title</h2>
            <p>Blog's content</p>
            {console.log(params)}
        </div>

    )
}
export default Blog