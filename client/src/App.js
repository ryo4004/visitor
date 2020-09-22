import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Scroll from './Component/Scroll/Scroll'
import Base from './Base/Base'
import Home from './Home/Home'
import Input from './Input/Input'
import Confirm from './Confirm/Confirm'
import Exit from './Exit/Exit'
import Toast from './Component/Toast/Toast'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Toast />
        <Scroll>
          <Switch>
            <Route exact path="/" component={Base} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/visitor" component={Input} />
            <Route exact path="/confirm" component={Confirm} />
            <Route exact path="/exit" component={Exit} />
          </Switch>
        </Scroll>
      </Router>
    )
  }
}
