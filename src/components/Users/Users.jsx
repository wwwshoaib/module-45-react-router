import { useLoaderData } from "react-router";
import User from "../User/User";


const Users = () => {
    const users = useLoaderData();
    return (
        <div className="  h-[400px] bg-green-400 text-white p-2 text-center overflow-y-scroll ">
               <h2 className="p-3 font-semibold">Our Users: {users.length}</h2>
            <div className="grid md:grid-cols-3 gap-3 ">
             
                {
                    users.map((user, index) => <User key={index} user={user}></User>)
                }

            </div>

        </div>
    );
};

export default Users;