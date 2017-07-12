import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Student extends Component {
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

  render () {
    const student = this.state.student;
      return (
      <div>
        <h3>Students</h3>
        <div className="list-group">
          {
            student.map(student => {
              return (
                <div className="list-group-item" key={student.id}>
                  <Link to={`/student/${student.id}`}>{ student.name }</Link>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}