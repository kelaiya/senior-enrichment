import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddCampus from './AddCampus';

export default class Campus extends Component {
	constructor () {
	    super();
	    this.state = {
	      campus: [],
      };
    }
  	componentDidMount () {
    	axios.get('/api/campus')
      .then(res => res.data)
      .then(campus => this.setState({ campus }));
  	}

    // handleClick(evt){
    //   const campusId = this.props.match.params.campusId;
    //   deleteit(){
    //     axios.delete(`/api/campus/${campusId}`)
    //     .then(res => res.data)
    //     .then(campus => this.setState(campus.filter(camp){
    //       if(camp.id != campusId){
    //         return camp
    //       }
    //     })
    //   )
    // }

    // }

    render(){
     const campus = this.state.campus;
     console.log("hi",campus);
      
      return (
      	<div>
          <h1>Campus</h1>

            {
      				campus.map(campus => {
      					return(
      						<li key={campus.id} className="campus-list">
      							<h3><Link to={`/campus/${campus.id}`}>{campus.name}</Link></h3>
                    <h3><Link to="/campus"><button className="btn btn-primary position3"><h3>X</h3></button></Link></h3>
      						</li>
      						);
								})
							}
 
                <AddCampus newCampus={this.props.newCampus} />

        </div>
			);
		}
};


