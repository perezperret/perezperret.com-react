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

const SectionLink = ({ isActive, sectionName }) => (
  <Link to={`/${sectionName}`}>
    {sectionName}{isActive ? '[active]' : ''}
  </Link>
)

const Navbar = ({ location, match }) => {

  const isActive = (pathname) => (
    pathname === location.pathname.split('/')[1]
  )

  return (
    <div>
      <h1><Link to="/">perezperret.com</Link></h1>
      <ul>
        {SECTION_NAMES.map(sectionName => (
          <li key={sectionName}>
            <SectionLink isActive={isActive(sectionName)} sectionName={sectionName} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default withRouter(Navbar)
