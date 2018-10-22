import React, { Component } from "react"

class Component1 extends Component {
  componentWillMount() {
    this.setState({
      current: 0
    })
    this.inAnimation = false
  }
  componentDidUpdate(prevProps, prevState) {}
  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h4>THIS IS THE COMPONENT1: {this.props.animation}</h4>
        </div>
      </div>
    );
  }
}

export default Component1
