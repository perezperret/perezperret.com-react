import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './views/Home'
import Skills from './views/Skills'
import Experience from './views/Experience'
import Education from './views/Education'
import Others from './views/Others'
import Contact from './views/Contact'

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/skills" component={Skills} />
    <Route path="/experience" component={Experience} />
    <Route path="/education" component={Education} />
    <Route path="/others" component={Others} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default AppRoutes
