import React from 'react'

import Menu from '../Menu'

const Tray = ({ onClick, isOpen, alreadyToggled }) => {
  const getClass = () => {
    if (isOpen) return 'navbar-tray--open'
    if (!isOpen && alreadyToggled) return 'navbar-tray--closed'
    return ''
  }

  return (
    <div className={`navbar-tray ${getClass()}`}>
      <Menu onClick={onClick} />
    </div>
  )
}

export default Tray
