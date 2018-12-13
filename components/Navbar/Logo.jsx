import React from 'react'
import { Link } from 'react-router-dom'
const logo = require('../../images/logo.svg')

const Logo = () => (
  <Link to="/">
    <img className="navbar_logo" src={logo} />
  </Link>
)

export default Logo
