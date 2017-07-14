import React, { Component } from 'react';
import axios from 'axios';
import Student from './Student';

export default class StatefulStudent extends Component {
  constructor () {
    super();
    this.state = {
      student: []
    };
  }
  componentDidMount () {
      axios.get('/api/student')
      .then(res => res.data)
      .then(student => this.setState({ student }));
  }

  render(){
  	const student = this.state.student;
    console.log("this is a headache", student )
  	return (
  		        <Student student={student} />
          );
		    }
	   }
