import React, { Component } from "react"
import { TransitionGroup, Transition } from "react-transition-group"
import { Route, Switch } from "react-router-dom"
// import components
import Home from "../home/"
import Component1 from "../component1/"
import Component2 from "../component2/"



class AppRoutes extends Component {
  render() {
    return (
      <TransitionGroup>
        <Transition
          key={window.location.pathname}
          timeout={500}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          {animation => (
            <Switch location={this.props.location}>
              <Route
                exact
                path="/"
                render={(props) => <Home {...props} animation={animation} />}
              />
              <Route
                path="/component1/"
                render={(props) => <Component1 {...props} animation={animation} />}
              />
              <Route
                path="/component2/"
                render={(props) => <Component2 {...props} animation={animation} />}
              />
            </Switch>
          )}
        </Transition>
      </TransitionGroup>
    )
  }
}

export default AppRoutes
