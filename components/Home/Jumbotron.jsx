import React from 'react'

import { Link } from 'react-router-dom'

const Jumbotron = () => (
  <div className="container bg-white box-shadow-bottom fold-height flex vertical align-end justify-center">
    <div className="flex vertical align-end pb-3-1">
      <div className="display-3 text-right text-muted">My name is</div>
      <Link to="/life">
        <div className="display-1 text-right text-underline-primary">Santiago Perez Perret</div>
      </Link>
    </div>

    <div className="flex vertical align-end pb-3-1">
      <div className="display-3 text-right text-muted">I work as a</div>
      <Link to="/work">
        <div className="display-1 text-right text-underline-primary">Remote Web Developer</div>
      </Link>
    </div>
  </div>
)

export default Jumbotron;
