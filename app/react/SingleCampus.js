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
      .then(student => {
        console.log("hhhhhhhh");
        this.setState({
        student
      })
        console.log("again hhhh", student)
      }
      )

      Promise.all([first, sec])
      .then(function(){
        console.log('resolved');
      })
  }


  render () {

    const singleCampus = this.state.singleCampus;
    console.log("I am first", singleCampus);
    
    const student = this.state.student
    console.log("this is a student", student)
    return (
        <div className="singleCampus">
          <h3>{ singleCampus.name }</h3>
          <h3>{ singleCampus.email }</h3>
          <div>
            <img src={ singleCampus.image } />
          </div>
          <li><Link to={`/campus/${singleCampus.id}/student`}>Students</Link></li>

          <Route path={`/campus/${singleCampus.id}/student`} render={() => (
            <Student student={student} />
          )} />
        </div>
    );
  }
}
