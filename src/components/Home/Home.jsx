import { Outlet, useNavigation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const Home = () => {
    const navigation = useNavigation();
    return (
        <div> 
            <div><h2>This is home component</h2></div>
            <Header></Header>
            {
                navigation.state === "loading"? 
                <p className="text-yellow-500">Loading...</p>
                :
                <Outlet></Outlet>
            }
          
            <Footer></Footer>
            
        </div>
    );
};

export default Home;