import React, { Component } from 'react'
// import react router
import { BrowserRouter as Router, Route } from "react-router-dom"

import Menu from "./components/menu"
import AppRoutes from "./components/routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">
              React & React Router & React Transition Group & GSAP
            </h2>
            <hr />
            <Menu />
            <hr />
            <Route 
              path="/" 
              render={(props) => <AppRoutes {...props} />}
             />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
