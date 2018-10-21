import React from 'react'

import Logo from './Navbar/Logo'
import Toggler from './Navbar/Toggler'
import Tray from './Navbar/Tray'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false, alreadyToggled: false }

    this.handleToggleTray = this.handleToggleTray.bind(this)
    this.getNavbarClass = this.getNavbarClass.bind(this)
  }

  handleToggleTray() {
    this.setState({
      isOpen: !this.state.isOpen,
      alreadyToggled: true
    })
  }

  getNavbarClass() {
    if (this.state.isOpen) return 'navbar--open'
    if (!this.state.isOpen && this.state.alreadyToggled) return 'navbar--closed'
    return ''
  }

  render() {
    const { isOpen, alreadyToggled } = this.state

    return (
      <nav className="navbar">
          <div className="navbar_menu">
            <Logo onClick={() => {isOpen && this.handleToggleTray()}} />
            <Toggler isOpen={isOpen} alreadyToggled={alreadyToggled} onClick={this.handleToggleTray} />
          </div>

          {
            isOpen
            ? <Tray isOpen={isOpen} alreadyToggled={alreadyToggled} onClick={this.handleToggleTray} />
            : null
          }
      </nav>
    )
  }
}

export default Navbar
