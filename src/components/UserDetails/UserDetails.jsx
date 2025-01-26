

import { useLoaderData } from "react-router";
import { useNavigate } from "react-router";


const UserDetails = () => {


    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    const user = useLoaderData();
    const {id, name, phone, email} = user;
    return (
        <div className="flex flex-col justify-center items-center h-[400px] bg-gray-50 text-black border-solid border-1">
            <p className="text-2xl font-semibold">Id: {id}</p>
            <p className="text-md font-semibold">Name: {name}</p>
            <p className="text-md font-semibold">Phone: {phone}</p>
            <p className="text-md font-semibold">Email: {email}</p>

            <button onClick={handleGoBack} className="btn btn-success">Go Back</button>
            

        </div>
    );
};

export default UserDetails;