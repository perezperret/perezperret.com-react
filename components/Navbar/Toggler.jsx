import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Toggler = ({ onClick, isOpen, alreadyToggled }) => {
  const getClass = () => {
    if (isOpen) return 'navbar-toggler--as-close'
    if (!isOpen && alreadyToggled) return 'navbar-toggler--as-open'
    return ''
  }

  return (
    <button type="button" className={`navbar-toggler ${getClass()}`} onClick={onClick}>
      <FontAwesomeIcon icon="plus" />
    </button>
  )
}

export default Toggler
