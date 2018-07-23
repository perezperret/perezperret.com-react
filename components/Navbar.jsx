import React from 'react'
import { Link } from 'react-router-dom'

import NavbarTray from './Navbar/NavbarTray'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isTrayOpen: false }
    this.handleToggleTray = this.handleToggleTray.bind(this)
  }

  handleToggleTray() {
    this.setState({ isTrayOpen: !this.state.isTrayOpen })
  }

  render() {
    return (
      <nav className="navbar">
        <h1><Link className="navbar_logo" to="/">perezperret</Link></h1>

        <div className="navbar_toggler">
          <span className="navbar_toggler_button" onClick={this.handleToggleTray}>
            +
          </span>

          {this.state.isTrayOpen ? <NavbarTray onToggleTray={this.handleToggleTray} /> : null}
        </div>
      </nav>
    )
  }
}

export default Navbar
