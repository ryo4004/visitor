import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Base from './Base/Base'
import Home from './Home/Home'
import Input from './Input/Input'
import Confirm from './Confirm/Confirm'
import Exit from './Exit/Exit'

import Logo from '../Component/Logo/Logo'

const Pages = () => {
  return (
    <div className="pages">
      <div className="logo">
        <Logo />
      </div>
      <div className="layout">
        <Router>
          <Switch>
            <Route exact path="/" component={Base} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/visitor" component={Input} />
            <Route exact path="/confirm" component={Confirm} />
            <Route exact path="/exit" component={Exit} />
          </Switch>
        </Router>
      </div>
      <footer>
        <div>
          <div className="author">
            <Logo />
            <small>&copy; The Wind Ensemble 1985-{new Date().getFullYear()} All Rights Reserved.</small>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Pages
