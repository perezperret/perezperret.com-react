import './node_modules/normalize.css'
import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './views/Routes'
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

const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
