import React, { Component } from 'react';
import axios from 'axios';
import Student from './Student';
import AddStudent from './AddStudent'

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
  	return (<div>
              <Student student={student} />
              <AddStudent newStudent={this.props.newStudent} />
             </div> 
          );
		    }
	   }
