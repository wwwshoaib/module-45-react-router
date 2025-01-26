
import './Header.css'
import {  NavLink } from 'react-router';


const Header = () => {
    return (
        <div className='flex flex-col justify-center'>
            <h2 className='text-center text-4xl font-semibold'>My React Router Website</h2>
            <nav className='p-3 text-fuchsia-600 text-center'id='NavId' >
                <NavLink to ='/'></NavLink>
                <NavLink to ='/users'>Users</NavLink>
                <NavLink to ='/posts'>Posts</NavLink>
                <NavLink to ='/about'>About</NavLink>
                <NavLink to ='/contact'>Contact Us</NavLink>
                
            </nav>
            
        </div>
    );
};

export default Header;