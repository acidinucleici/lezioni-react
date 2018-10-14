import React, { Component } from 'react'

class Home extends Component {
    componentDidMount() {
      this.$ = {
        root: this.node,
        }
      this.props.onRef(this)
    }
    render() {
      return (
          <div>HOMEPAGE!!!</div>
      )
    }
  }
  
  Home.defaultProps = {
    onRef: () => {},
  }
  
  export default Home