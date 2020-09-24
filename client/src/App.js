import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Scroll from './Component/Scroll/Scroll'
import Pages from './Pages/Pages'
import Toast from './Component/Toast/Toast'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Toast />
        <Scroll>
          <Switch>
            <Route path="/" component={Pages} />
          </Switch>
        </Scroll>
      </Router>
    )
  }
}
