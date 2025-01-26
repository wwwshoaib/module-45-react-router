import { Link, useRouteError } from "react-router";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col justify-center items-center h-svh text-center">
            <h2 className="text-3xl">Oops !!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 &&
                <div>
                    <h3 className="text-xl">Page not found</h3>
                    <p>Go back home</p>
                    <Link to="/"><button className="p-2 bg-green-400 rounded-lg mt-4">Go back Home</button></Link>
                </div>
            }

        </div>
    );
};

export default ErrorPage;