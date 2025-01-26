
import { Link, useNavigate } from "react-router";
import PropTypes from "prop-types";
const User = ({user}) => {
    const {id, name, phone, email} = user;
    const navigate = useNavigate();

    const handleShowDetailsByButton = () => {
        navigate(`/user/${id}`);
    }
    return (
        <div className="  border border-black p-5 gap-2 ">
            <h4 className="text-2xl font-semibold">User id: {id}</h4>
            <p className="text-sm font-semibold">User Name: {name}</p>
            <p className="text-sm ">User Phone: {phone}</p>
            <p className="text-sm ">User Email: {email}</p>
            <Link to = {`/user/${id}`} className="btn btn-secondary my-3">Show Details</Link>
            <button onClick={handleShowDetailsByButton} className="btn btn-success">click button to show details</button>
        </div>
    );
};

User.propTypes = {
    user:PropTypes.object,
}

export default User;