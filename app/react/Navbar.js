import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	return(
		  <navbar>
		  	<div>
	    		<Link to="/campus"><button className="btn btn-primary position2">
	    		<h3>Campus</h3></button></Link>
	    		<Link to="/student"><button className="btn btn-primary position2">
	    		<h3>Student</h3></button></Link>
	    		<img src="https://www.fastweb.com/uploads/article_photo/photo/2161/crop380w_istock_000002193842xsmall-books.jpg" />
				</div>
			</navbar>
	  );
	}

export default Navbar;