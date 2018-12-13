import React from 'react'
import { withRouter } from 'react-router-dom'

import Logo from './Navbar/Logo'

const Navbar = ({ location }) => (
  <nav className={`navbar${location.pathname == '/' && ' bg-white'}`}>
    <div className="navbar_menu">
      <Logo />
    </div>
  </nav>
)

export default withRouter(Navbar)
