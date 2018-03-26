import React, { Component } from 'react'

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    /*this.setState((prevState) => ({
      flag: !prevState.flag
    }))*/

    this.setState({
      flag: !this.state.flag
    });
    //console.log(this.state.flag)

    /*this.setState({
      flag: !this.state.flag
    }, () => {
      console.log(this.state.flag)
    });*/
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle}>{this.state.flag ? 'Yes' : 'No'}</button>
        <br />
        <br />
        Button value is <b>{this.state.flag ? 'Yes' : 'No'}</b>
      </div>
    )
  }
}


function StateExamples() {
  return (
    <div>
      <p>Build a toggle button which toggles between Yes/No</p>
      <Toggle />
      <hr />
    </div>
  )
}

export default StateExamples
