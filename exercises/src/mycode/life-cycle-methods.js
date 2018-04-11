import  React, { Component } from 'react'


class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    console.log("[Inside constructor]")
  }

  componentWillMount() {
    console.log("[Inside componentWillMount]")
  }

  componentDidMount() {
    console.log("[Inside componentDidMount]")
  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {
    console.log("[Inside componentWillUnmount]")
  }

  render() {
    return (
      <div>
        Example of React Life cycle
      </div>
    );
  }
}
export default LifeCycleMethods
