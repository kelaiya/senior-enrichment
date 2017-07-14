import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Campus from './Campus';
import Navbar from './Navbar';
import Student from './Student';
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';
import StatefulStudent from './StatefulStudent'
import AddCampus from './AddCampus'
import axios from 'axios';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      campus: [],
      student: []
    };

    this.newCampus = this.newCampus.bind(this);

  }

  componentDidMount(){
    axios.get('/api/campus')
      .then(res => res.data)
      .then(campus => this.setState({ campus }));
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
  render(){
    console.log("HHHHHIIII");
    const campus = this.state.campus;
    const newCampus = this.newCampus;

  	return(
  	       <Router>
  	       	<div id="main" className="container-fluid">
          		<div className="col-xs-2">
            		<Navbar />
          		</div>
              <Switch>
          	  <Route exact path="/campus" component={Campus} />
              <Route path="/campus/:campusId" component={SingleCampus} />
              <Route exact path="/student" component={StatefulStudent} />
              <Route path="/student/:studentId" component={SingleStudent} />
        		  <Route path="/new-campus" render={() => <AddCampus newCampus={newCampus} />} />
              
            </Switch>
            </div>
					</Router>
        );
      }
    }