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

const NavbarTray = withRouter(({ onToggleTray, location }) => {
  const isActive = (pathname) => (
    pathname === location.pathname.split('/')[1]
  )

  return (
    <div className="navbar_tray">
      <div className="navbar_tray_close">
        <span onClick={onToggleTray} className="navbar_tray_close_button">
          &times;
        </span>
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
})

export default NavbarTray
