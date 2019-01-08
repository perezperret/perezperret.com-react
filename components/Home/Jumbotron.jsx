import React from 'react'

import { Link } from 'react-router-dom'

const Jumbotron = ({ highlights }) => (
  <div className="bg-white box-shadow-bottom mb-3-1">
    <div className="container fold-height flex flex-column align-end align-md-center justify-center">
      {
        highlights.map(({ subHeading, heading, link }) => (
          <div key={subHeading} className="flex flex-column align-end align-md-center pb-3-1">
            <div className="h6 h-xs-3 h-sm-2 display-md-3 text-muted">{subHeading}</div>
            <Link to={link}>
              <div className="h3 h-xs-1 display-sm-3 display-md-1 text-underline-primary">{heading}</div>
            </Link>
          </div>
        ))
      }
    </div>
  </div>
)

export default Jumbotron;
