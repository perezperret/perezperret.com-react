import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Menu from './Menu'
const logo = require('../images/logo.png')

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { trayIsOpen: false, togglerStarted: false }

    this.handleToggleTray = this.handleToggleTray.bind(this)
  }

  handleToggleTray() {
    this.setState({
      trayIsOpen: !this.state.trayIsOpen,
      togglerStarted: true
    })
  }

  render() {
    const { trayIsOpen, togglerStarted } = this.state
    const getTogglerClass = () => {
      if (trayIsOpen) return 'navbar_nav_toggler--as-close'
      if (!trayIsOpen && togglerStarted) return 'navbar_nav_toggler--as-open'
      return ''
    }

    return (
      <nav className={`navbar${trayIsOpen ? ' navbar--open' : ''}`}>
        <div className="navbar_nav constrained">
          <Link onClick={() => {trayIsOpen && this.handleToggleTray()}} className="navbar_nav_logo" to="/">
            <img src={logo} />
          </Link>

          <div className={`navbar_nav_toggler ${getTogglerClass()}`} onClick={this.handleToggleTray}>
            <FontAwesomeIcon icon="plus" />
          </div>
        </div>

        {trayIsOpen
          ? <div className="constrained">
              <div className="tray">
                <div className="tray--open">
                  <Menu onToggleTray={this.handleToggleTray} />
                </div>
              </div>
            </div>
          : null
        }
      </nav>
    )
  }
}

export default Navbar
