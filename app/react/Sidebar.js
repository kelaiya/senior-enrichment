import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	return(
		  <sidebar>
		  	<div>
	    		<Link to="/campus"><button className="btn btn-primary btn-block">
	    		<h3>Campus</h3></button></Link>
	    		<Link to="/student"><button className="btn btn-primary btn-block">
	    		<h3>Student</h3></button></Link>
	    	</div>
			</sidebar>
	  );
	}

export default Navbar;