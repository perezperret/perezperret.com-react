import React from 'react'
import { Link } from 'react-router-dom'
const logo = require('../../images/logo.png')

const Logo = ({ onClick }) => (
  <Link className="navbar-logo" onClick={onClick} to="/">
    <img src={logo} />
  </Link>
)

export default Logo
