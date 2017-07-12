import React, { Component } from 'react';
import axios from 'axios';
import Campus from './Campus';
import { Link } from 'react-router-dom';


export default class SingleCampus extends Component {

  constructor () {
    super();
    this.state = {
      singleCampus: {}
    };
  }
  componentDidMount () {
  	console.log("here",this.props.match.params);
    const campusId = this.props.match.params.campusId;
    console.log("now", campusId);
    axios.get(`/api/campus/${campusId}`)
      .then(res => res.data)
      .then(singleCampus => this.setState({
        singleCampus
      })
      )
  }
   render () {

    const singleCampus = this.state.singleCampus;
    console.log("god", singleCampus)
    return (
      <div className="singleCampus">
          <h3>{ singleCampus.name }</h3>
          
          <h3>{ singleCampus.email }</h3>
          {console.log("link",singleCampus.image)}
          <div>
                <img src={ singleCampus.image } />
           </div>     
          
      </div>
    );
  }
}
