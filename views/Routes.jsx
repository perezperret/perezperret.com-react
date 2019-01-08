import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import MyLife from './MyLife'
import MyWork from './MyWork'

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/my-life" component={MyLife} />
    <Route path="/my-work" component={MyWork} />
  </Switch>
)

export default AppRoutes
