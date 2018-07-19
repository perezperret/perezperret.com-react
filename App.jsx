import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home'
import Skills from './views/Skills'
import Experience from './views/Experience'
import Education from './views/Education'
import Others from './views/Others'
import Contact from './views/Contact'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/experience" component={Experience} />
        <Route path="/education" component={Education} />
        <Route path="/others" component={Others} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  </Router>
)

export default App
