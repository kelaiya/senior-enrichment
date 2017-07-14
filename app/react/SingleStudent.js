import React, { Component } from 'react';
import axios from 'axios';
import Student from './Student';
import Campus from './Campus'
import AddStudent from './AddStudent'

export default class SingleStudent extends Component {

  constructor () {
    super();
    this.state = {
      singleStudent: {},
      campus : []
    };
    this.first = this.first.bind(this);
    this.sec = this.sec.bind(this);
  }

  first (){
    axios.get(`/api/campus`)
    .then(res => res.data)
    .then(campus => this.setState({
      campus
    })
  )
  }

  sec(studentId) {
    axios.get(`/api/student/${studentId}`)
      .then(res => res.data)
      .then(singleStudent => this.setState({
        singleStudent
      })
    )
    }

  componentDidMount () {
  	console.log("here",this.props.match.params);
    const studentId = this.props.match.params.studentId;
    console.log("now", studentId)
    this.first();
    this.sec(studentId);
   }
   render () {

    

    const singleStudent = this.state.singleStudent;
    const campus = this.state.campus;

    var ans = campus.map(camp => {
      if (camp.id === singleStudent.campusId){
        return camp.name;
      } 
    })

    return (
      <div className="singleStudent col-xs-8">
          <h2>Name : { singleStudent.name }</h2>
          <h2>Email : { singleStudent.email }</h2>
          <h2>          Campus : {ans}</h2>

      </div>
    );
  }
}












