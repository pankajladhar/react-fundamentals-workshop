import React, { Component } from 'react';


class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: null
    }
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this._validate = this._validate.bind(this);
  }

  _validate (value) {
    return value.length > 0 ? "valid input" : "invalid input"
  }
  handleOnBlur(e) {
    this.setState({
      valid : this._validate(e.target.value)
    });
  }

  render() {
    return (
      <div>
        My input: <input defaultValue={this.props.value} 
          onBlur={this.handleOnBlur} 
          type="text" />
          {this.state.valid != null && 
            <span>Inside Parent component <b>{this.state.valid}</b></span>}
      </div>
    );
  }
}


class Grandparent extends Component {
  constructor(props) {
    super(props);
    this.value = "somevalue"
    this.state = {
      valid: null
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      valid: this.inputElement._validate(this.value)
    });
  }
  render() {
    return (
      <div>
        Usage of refs
        <Parent
          value={this.value}
          ref={inputElement => this.inputElement = inputElement}
        />
        <button onClick={this.handleClick}> validate </button>
        {this.state.valid != null && 
          <span>Inside Grand Parent component <b>{this.state.valid}</b></span>}
      </div>
    );
  }
}

export default Grandparent;