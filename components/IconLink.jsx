import React from 'react'

import { Link } from 'react-router-dom'

const IconLink = ({ icon, label, link }) => (
  <a className="btn btn-primary" href={link} target="_blank">
    <img className="btn_icon mr-1-2" src={icon} />{" "}
    <span>{label}</span>
  </a>
)

export default IconLink
