import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const Home = () => {
    return (
        <div> 
            <div><h2>This is home component</h2></div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;