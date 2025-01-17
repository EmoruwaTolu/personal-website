import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './navbar-styling.css';

interface NavbarProps {
  title: string;
  links: { name: string; url: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ title, links }) => {

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <Link to='/'></Link>
            </div>
            <ul className={showDropdown ? 'navbar-links dropdown-menu' : 'navbar-links'}>
                {links.map((link, index) => (
                <li className='navbar-link' key={index}>
                    <Link to={link.url}><span>{link.name}</span></Link>
                </li>
                ))}
            </ul>
            <div className='dropdown-button' onClick={toggleDropdown}>
                &#9776; {/* Unicode for three horizontal bars (Hamburger menu icon) */}
            </div>
            <ul className={showDropdown ? 'dropdown-menu active' : 'dropdown-menu'}>
                {links.map((link, index) => (
                <li className='navbar-link' key={index}>
                    <Link className={showDropdown ? 'ready' : ''} to={link.url}>{link.name}</Link>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;