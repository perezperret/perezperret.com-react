import React from 'react'
import { ABOUT } from '../content/Home'

import Menu from '../components/Menu'

const Home = () => (
  <div>
    <div className="bg-white">
      <div className="constrained container display">
        <p>{ABOUT}</p>
      </div>
    </div>

    <div className="constrained container">
      <Menu />
    </div>
  </div>
)

export default Home
