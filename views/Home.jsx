import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ABOUT } from '../content/Home'

import Menu from '../components/Menu'

const Home = () => (
  <div>
    <div className="bg-white mb-8">
      <div className="constrained container display">
        <p>{ABOUT}</p>
      </div>
    </div>

    <div className="constrained container display justify-right">
      <div className="text-tight text-right constrained-xs">
        <span className="display-1">santiago</span>{' '}
        <span className="display-1 text-secondary">perez</span>{' '}
        <span className="display-1 text-primary">perret</span>{' '}
      </div>
    </div>
  </div>
)

export default Home
