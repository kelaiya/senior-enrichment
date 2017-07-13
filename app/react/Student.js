import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Student = (props) => {

  const student = props.student;
  console.log("tgis is a props.", props)
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

  export default Student;