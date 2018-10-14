import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'

import './App.css'

import Home from '../src/components/home'
import Page from '../src/components/page'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link
                to={{
                  pathname: "/",
                }}
              >home</Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/page/page-slug/",
                  search: "?sort=name",
                  hash: "#the-hash",
                }}
              >page</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route
            path='/page/:slug'
            render={(props) => <Page {...props} isAuthed={true} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
