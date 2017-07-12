import React, { Component } from 'react';
import axios from 'axios';
import Student from './Student';


export default class SingleStudent extends Component {

  constructor () {
    super();
    this.state = {
      singleStudent: {}
    };
  }
  componentDidMount () {
  	console.log("here",this.props.match.params);
    const studentId = this.props.match.params.studentId;
    console.log("now", studentId);
    axios.get(`/api/student/${studentId}`)
      .then(res => res.data)
      .then(singleStudent => this.setState({
        singleStudent
      })
      )
  }
   render () {

    const singleStudent = this.state.singleStudent;
    console.log("god", singleStudent)
    return (
      <div className="singleStudent">
          <h3>{ singleStudent.name }</h3>
          <h3>{ singleStudent.email }</h3>
      </div>
    );
  }
}












