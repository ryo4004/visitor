import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Scroll from './Component/Scroll/Scroll'
import Home from './Home/Home'
import Toast from './Component/Toast/Toast'

export default class App extends Component {
  render () {
    return (
      <Router>
        <Toast />
        <Scroll>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Scroll>
      </Router>
    )
  }
}