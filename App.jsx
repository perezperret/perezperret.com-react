import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Routes from './Routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  </Router>
)

export default App
