import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Campus extends Component {
	constructor () {
	    super();
	    this.state = {
	      campus: []
	    };
	  }
  	componentDidMount () {
    	axios.get('/api/campus')
      .then(res => res.data)
      .then(campus => this.setState({ campus }));
  	}
    render(){
      
      const campus = this.state.campus;
      console.log("hi",campus);
  		return (
      	<div>
      		<h1>Campus</h1>
      		<div>

      			{
      				campus.map(campus => {
      					return(
      						<div className="list-group-item" key={campus.id}>
      							<Link to={`/campus/${campus.id}`}>{campus.name}</Link>
      						</div>
      						);
								})
							}
              <h1>hahaha</h1>
					</div>
				</div>
			);
		}
};


