import { useLoaderData } from "react-router";
import Post from "../Post/Post";



const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className="text-center ">
            <h3>Posts: {posts.length}</h3>
           
                <div className="grid md:grid-cols-3 gap-3 p-4 m-3 ">
                    {
                        posts.map((post, index) => <Post key={index} post={post}></Post>)
                    }



                </div>

            

        </div>
    );
};

export default Posts;