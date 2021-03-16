import React from "react";
import {Link} from 'react-router-dom';
import '../App.css';

const Navbar = () => {

	return (
    <nav>
      <ul className="nav-links">
        <Link to="/"><li className="nav-item-style">Home</li></Link>
        <Link to="/user"><li className="nav-item-style">User</li></Link>
        <Link to="/map"><li className="nav-item-style">Map</li></Link>
      </ul>
    </nav>
	);
};

export default Navbar;