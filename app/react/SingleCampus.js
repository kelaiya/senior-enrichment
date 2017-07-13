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
      singleCampus: {}
    };
  }
  componentDidMount () {
  	console.log("here",this.props.match.params);
    const campusId = this.props.match.params.campusId;
    console.log("now", campusId);
    axios.get(`/api/campus/${campusId}`)
      .then(res => res.data)
      .then(singleCampus => this.setState({
        singleCampus
      })
      )
  }



  // componentDidMount () {
  //   const campusId = this.props.match.params.campusId;
  //   const mainPath = `/api/campus/${campusId}`;
  //   const paths = [mainPath, `${mainPath}/student`];
  //   Bluebird
  //     .map(paths, path => axios.get(path))
  //     .map(res => res.data)
  //     .spread((singleCampus, student) => {
  //       console.log("single campus",singleCampus, "stuent", student)
  //       singleCampus.student = student;
  //       this.setState({ singleCampus });
  //     });
  // }

  render () {

    const singleCampus = this.state.singleCampus;
    console.log("I am first", singleCampus);
    const student = singleCampus.student || [];
    console.log("this is a student", student)

    return (
        <div className="singleCampus">
          <h3>{ singleCampus.name }</h3>
          <h3>{ singleCampus.email }</h3>
          <div>
            <img src={ singleCampus.image } />
          </div>
        </div>
    );
  }
}
