import React from 'react'

import { Link } from 'react-router-dom'

const Jumbotron = ({ highlights }) => (
  <div className="bg-white box-shadow-bottom">
    <div className="container fold-height flex vertical align-end align-md-center justify-center">
      {
        highlights.map(({ subHeading, heading, link }) => (
          <div key={subHeading} className="flex vertical align-end align-md-center pb-3-1">
            <div className="h6 display-md-3 text-muted">{subHeading}</div>
            <Link to={link}>
              <div className="h3 display-md-1 text-underline-primary">{heading}</div>
            </Link>
          </div>
        ))
      }
    </div>
  </div>
)

export default Jumbotron;
