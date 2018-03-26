import React, { Component } from 'react'

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle(e, name) {
    this.setState((prevState) => ({
      flag: !prevState.flag
    }));

    console.log(e.target)
    console.log("Name", name)
  }
  render() {
    return (
      <div>
        <button onClick={(e)=>this.toggle(e, "Pankaj")}>{this.state.flag ? 'Yes' : 'No'}</button>
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
