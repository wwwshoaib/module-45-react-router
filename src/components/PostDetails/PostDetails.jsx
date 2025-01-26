

import { useLoaderData, useNavigate } from "react-router";
const PostDetails = () => {
    const post = useLoaderData()
    const {id, name, phone, email} = post;
    
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
   
         
            return (
            <div className="flex flex-col justify-center items-center h-[400px] bg-gray-50 text-black border-solid border-1">
                <p className="text-2xl font-semibold">Id: {id}</p>
                <p className="text-md font-semibold">Name: {name}</p>
                <p className="text-md font-semibold">Phone: {phone}</p>
                <p className="text-md font-semibold">Email: {email}</p>

                <button onClick={handleGoBack}>Go Back</button>
            </div>
            );

      
};

export default PostDetails;