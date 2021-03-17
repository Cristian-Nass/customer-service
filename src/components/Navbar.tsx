import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {

	return (
    <nav className='navbar'>
      <ul className="navbar__links">
        <Link to="/" className="navbar__link-wrapper"><li className="navbar__link">Home</li></Link>
        <Link to="/user" className="navbar__link-wrapper"><li className="navbar__link">User</li></Link>
        <Link to="/map" className="navbar__link-wrapper"><li className="navbar__link">Map</li></Link>
      </ul>
    </nav>
	);
};

export default Navbar;