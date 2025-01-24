
import './Header.css'
import { Link } from 'react-router';


const Header = () => {
    return (
        <div className='flex flex-col justify-center'>
            <h2 className='text-center text-4xl font-semibold'>My Website</h2>
            <nav className='p-3 text-fuchsia-600 text-center'>
                <Link to ='/'></Link>
                <Link to ='/users'>Users</Link>
                <Link to ='/about'>About</Link>
                <Link to ='/contact'>Contact Us</Link>
                
            </nav>
            
        </div>
    );
};

export default Header;