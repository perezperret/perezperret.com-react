import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Menu from './Menu'
const logo = require('../images/logo.png')

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { trayIsOpen: false }

    this.handleToggleTray = this.handleToggleTray.bind(this)
  }

  handleToggleTray() {
    const trayIsOpen = !this.state.trayIsOpen
    this.setState({ trayIsOpen })
  }

  render() {
    const { trayIsOpen } = this.state

    return (
      <nav className={`navbar${trayIsOpen ? ' navbar--open' : ''}`}>
        <div className="navbar_nav constrained">
          <Link onClick={() => {trayIsOpen && this.handleToggleTray()}} className="navbar_nav_logo" to="/">
            <img src={logo} />
          </Link>

          <div className="navbar_nav_toggler" onClick={this.handleToggleTray}>
            <FontAwesomeIcon icon="plus" />
          </div>
        </div>

        {trayIsOpen
          ? <div className="navbar_tray">
              <div className="constrained">
                <Menu onToggleTray={this.handleToggleTray} />
              </div>
            </div>
          : null
        }
      </nav>
    )
  }
}

export default Navbar
