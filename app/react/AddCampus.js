import React, { Component } from 'react';


export default class AddCampus extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputName: ''
    }

    console.log(this.props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(evt) {
    this.setState( { inputName: evt.target.value } );
  }

  handleSubmit(evt) {

    evt.preventDefault();
    console.log('props', this.state.inputName);
    const newCampus = this.props.newCampus;
    newCampus(this.state.inputName);
    this.setState({
      inputName: ''
    })

  }


  render() {

    const inputName = this.state.inputName;
    const handleSubmit = this.handleSubmit;
    const handleChange = this.handleChange;

    return (
    <div className="addCampus" style={{marginTop: '20px'}}>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <fieldset>
          <legend></legend>
            <legend>Add Campus</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Campus Name</label>
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
                  New Campus
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}