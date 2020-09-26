import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Pages from './Pages/Pages'
import Toast from './Component/Toast/Toast'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Toast />
        <Switch>
          <Route path="/" component={Pages} />
        </Switch>
      </Router>
    )
  }
}
