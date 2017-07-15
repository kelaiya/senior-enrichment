import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Campus from './Campus';
import Sidebar from './Sidebar';
import Student from './Student';
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';
import StatefulStudent from './StatefulStudent';
import AddCampus from './AddCampus'
import AddStudent from './AddStudent'
import axios from 'axios';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      campus: [],
      student: []
    };

    this.newCampus = this.newCampus.bind(this);
    this.newStudent = this.newStudent.bind(this);
  }

  componentDidMount(){
    var first = axios.get('/api/campus')
      .then(res => res.data)
      .then(campus => this.setState({ campus }));

    var sec = axios.get('/api/student')
      .then(res => res.data)
      .then(student => this.setState({ student })); 

    Promise.all([first, sec])
    .then(function(){
      console.log("I am done");
    })
  }

  newCampus(name) {

    axios.post('/api/campus', { name })
      .then(res => res.data)
      .then(camp =>
      {
        this.setState({
          campus: [...this.state.campus, camp]
      })
    })
  }

  newStudent(name) {
    axios.post('/api/student', { name })
      .then(res => res.data)
      .then(stu =>
      {
        this.setState({
          student: [...this.state.student, stu]
      })
    })
  }

  

  render(){
    const campus = this.state.campus;
    const newCampus = this.newCampus;
    const newStudent = this.newStudent;

  	return(
  	       <Router>
  	       	<div id="main" className="container-fluid">
          		<div className="col-xs-2">
            		<Sidebar />
          		</div>
              <div className="col-xs-10">
                <Switch>
              	  
                  <Route exact path="/campus" render={() => <Campus newCampus={newCampus} />} />
                  <Route path="/campus/:campusId" component={SingleCampus} />
                  <Route exact path="/student" render={() => <StatefulStudent newStudent={newStudent} />} />
                  <Route path="/student/:studentId" component={SingleStudent} />
            		  <Route path="/new-campus" render={() => <AddCampus newCampus={newCampus} />} />
                  <Route path="/new-student" render={() => <AddStudent newStudent={newStudent} />} />
                </Switch>
              </div>
            </div>
					</Router>
        );
      }
    }