import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Campus from './Campus';
import Navbar from './Navbar';
import Student from './Student';
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';
export default class Main extends Component {
  render(){
    console.log("HHHHHIIII");
  	return(
  	       <Router>
  	       	<div id="main" className="container-fluid">
          		<div className="col-xs-2">
            		<Navbar />
          		</div>
              <Switch>
          	  <Route exact path="/campus" component={Campus} />
              <Route path="/campus/:campusId" component={SingleCampus} />
              <Route exact path="/student" component={Student} />
              <Route path="/student/:studentId" component={SingleStudent} />
        		</Switch>
            </div>
					</Router>
        );
      }
    }