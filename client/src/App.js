import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Scroll from './Component/Scroll/Scroll'
import Base from './Pages/Base/Base'
import Home from './Pages/Home/Home'
import Input from './Pages/Input/Input'
import Confirm from './Pages/Confirm/Confirm'
import Exit from './Pages/Exit/Exit'
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
