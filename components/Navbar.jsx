import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const SECTION_NAMES = [
  'skills',
  'experience',
  'education',
  'others',
  'contact'
]

const SectionLink = ({ isActive, sectionName, onClick }) => (
  <Link onClick={onClick} to={`/${sectionName}`} className={`navbar_menu_link${isActive ? ' navbar_menu_link--active': ''}`}>
    {sectionName}
  </Link>
)

const NavbarTray = ({ isActive, onToggleTray }) => (
  <div className="navbar_tray">
    <div className="navbar_tray_close">
      <span onClick={onToggleTray} className="close">&times;</span>
    </div>

    <ul className="navbar_menu">
      {SECTION_NAMES.map(sectionName => (
        <li key={sectionName}>
          <SectionLink onClick={onToggleTray} isActive={isActive(sectionName)} sectionName={sectionName} />
        </li>
      ))}
    </ul>
  </div>
)

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isTrayOpen: false }
  }

  handleToggleTray() {
    this.setState({ isTrayOpen: !this.state.isTrayOpen })
  }

  render() {
    const isActive = (pathname) => (
      pathname === location.pathname.split('/')[1]
    )

    return (
      <nav className="navbar">
        <h1><Link className="navbar_logo" to="/">perezperret.com</Link></h1>
        <div className="navbar_menu_toggler">
          <span className="navbar_menu_toggler_button" onClick={this.handleToggleTray.bind(this)}>
            +
          </span>
          {this.state.isTrayOpen
            ? <NavbarTray isActive={isActive} onToggleTray={this.handleToggleTray.bind(this)} />
            : null
          }
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
