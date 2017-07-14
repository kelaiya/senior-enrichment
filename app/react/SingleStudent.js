import React, { Component } from 'react';
import axios from 'axios';
import Student from './Student';
import Campus from './Campus'


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


    console.log("god", singleStudent)
    console.log("god god god", campus )
    return (
      <div className="singleStudent col-xs-8">
          <h1>Name : { singleStudent.name }</h1>
          <h1>Email : { singleStudent.email }</h1>
          <h1>          Campus : {ans}</h1>

      </div>
    );
  }
}












