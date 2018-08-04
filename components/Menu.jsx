import React from 'react'
import { Link } from 'react-router-dom'

const MENU_NAMES = [
  'contact',
  'skills',
  'experience',
  'education',
  'more'
]

const MenuLink = ({ sectionName, onClick }) => (
  <Link onClick={onClick} to={`/${sectionName}`} className="menu_link link">
    {sectionName}
  </Link>
)

const Menu = ({ onClick }) => (
  <ul className="menu">
    {MENU_NAMES.map(sectionName => (
      <li key={sectionName}>
        <MenuLink onClick={onClick} sectionName={sectionName} />
      </li>
    ))}
  </ul>
)

export default Menu
