import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	return(
		  <navbar>
		  	<div>
	    		<Link to="/campus"><button className="btn btn-primary position2">
	    		Campus</button></Link>
	    		<Link to="/student"><button className="btn btn-primary position2">
	    		Student</button></Link>
				</div>
	    </navbar>
	  );
	}

export default Navbar;