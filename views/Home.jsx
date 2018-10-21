import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ABOUT } from '../content/Home'

import Menu from '../components/Menu'

const Home = () => (
  <div className="container bg-white fold-height flex vertical align-end justify-center">
    <div className="flex vertical align-end pb-3-1">
      <div className="display-3 text-right text-muted">My name is</div>
      <div className="display-1 text-right text-underline-primary">Santiago Perez Perret</div>
    </div>

    <div className="flex vertical align-end pb-3-1">
      <div className="display-3 text-right text-muted">I work as a</div>
      <div className="display-1 text-right text-underline-primary">Remote Web Developer</div>
    </div>
  </div>
)

export default Home

// <div className="container display justify-right">
//   <div className="text-tight text-right constrained-xs">
//     <span className="display-1">santiago</span>{' '}
//     <span className="display-1 text-secondary">perez</span>{' '}
//     <span className="display-1 text-primary">perret</span>{' '}
//   </div>
// </div>
