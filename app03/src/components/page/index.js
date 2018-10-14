import React, { Component } from 'react'

class Page extends Component {
    componentDidMount() {
      this.$ = {
        root: this.node,
        }
      this.props.onRef(this)
    }
    render() {
      return (
          <div>PAGINA!!!</div>
      )
    }
  }
  
  Page.defaultProps = {
    onRef: () => {},
  }
  
  export default Page