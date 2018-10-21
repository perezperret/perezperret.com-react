import React from 'react'

import Menu from '../Menu'

const Tray = ({ onClick, isOpen, alreadyToggled }) => {
  return (
    <div className="navbar_tray">
      <Menu onClick={onClick} />
    </div>
  )
}

export default Tray
