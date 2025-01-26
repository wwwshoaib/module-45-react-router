
import PropTypes from "prop-types";
import { Link } from "react-router";
const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className="bg-red-200 text-center p-5 border border-black ">
            <p>Post Id: {id}</p>
            <p>Post Title: {title}</p>
            <Link to = {`/post/${id}`} className="btn btn-secondary my-3">show details</Link>
            
        </div>
    );
};
Post.propTypes = {
    post:PropTypes.object
}
export default Post;