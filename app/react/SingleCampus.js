import React, { Component } from 'react';
import axios from 'axios';
import Campus from './Campus';
import { Link, Route} from 'react-router-dom';
import Student from './Student';
import Bluebird from 'bluebird';


export default class SingleCampus extends Component {

  constructor () {
    super();
    this.state = {
      singleCampus: {},
      student: []
    };

  }
  componentDidMount () {
  	console.log("here",this.props.match.params);
    const campusId = this.props.match.params.campusId;
    console.log("now", campusId);

    const first = axios.get(`/api/campus/${campusId}`)
      .then(res => res.data)
      .then(singleCampus => this.setState({
        singleCampus
      })
    )

    const sec = axios.get(`/api/campus/${campusId}/student`)
      .then(res => res.data)
      .then(student => { this.setState({
        student
      })
    }
   ) 

    Promise.all([first, sec])
     .then(function(){
       console.log('resolved');
     })
    }

  render () {

    const singleCampus = this.state.singleCampus;
    const student = this.state.student;

    return (
        <div className="singleCampus">
          <h2>Campus name : { singleCampus.name }</h2>
          <h2>{ singleCampus.email }</h2>
          <div>
            <img src={ singleCampus.image } />
          </div>

          <h3><Link to={`/campus/${singleCampus.id}/student`}>Student's list</Link></h3>

          <Route path={`/campus/${singleCampus.id}/student`} render={() => (
            <Student student={student} />
          )} />

        </div>
    );
  }
}
