import React, { Component } from 'react';

export class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  inputHandler = e => {
    this.setState({ value: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log('Submiting from Name.js');
    this.props.displayValue(this.state.value);
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
      </div>
    );
  }
}

export default Name;
