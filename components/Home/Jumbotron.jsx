import React from 'react'

import { Link } from 'react-router-dom'

const Jumbotron = ({ highlights }) => (
  <div className="container bg-white box-shadow-bottom fold-height flex vertical align-end justify-center">
    {
      highlights.map(({ subHeading, heading, link }) => (
        <div key={subHeading} className="flex vertical align-end pb-3-1">
          <div className="h1 text-right text-muted">{subHeading}</div>
          <Link to={link}>
            <div className="display-3 text-right text-underline-primary">{heading}</div>
          </Link>
        </div>
      ))
    }
  </div>
)

export default Jumbotron;
