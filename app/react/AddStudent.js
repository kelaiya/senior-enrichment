import React, { Component } from 'react';

export default class AddStudent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputName: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    console.log("very imp", evt.target.value)
    this.setState( { inputName: evt.target.value } );
  }

  handleSubmit(evt) {

    evt.preventDefault();
    const newStudent = this.props.newStudent;
    newStudent(this.state.inputName);
    this.setState({
      inputName: ''
    })

  }


  render() {

    const inputName = this.state.inputName;
    const handleSubmit = this.handleSubmit;
    const handleChange = this.handleChange;

    return (
    <div className="addStudent" style={{marginTop: '20px'}}>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <fieldset>
          <legend></legend>
            <legend>Add Student</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Student Name</label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  type="text"
                  onChange={handleChange}
                  value={inputName}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button
                  type="submit"
                  className="btn btn-success">
                  New Student
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}