import React, { Component } from 'react';

export class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      display: '',
    };
  }

  inputHandler = e => {
    this.setState({ value: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.setState({ name: this.state.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label> Your Name:</label>
          <input
            type='text'
            value={this.state.value}
            onChange={this.inputHandler}
          />
          <input type='submit' value='Submit' />
        </form>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default Name;
