import React from 'react'
import { ABOUT } from '../content/Home'

import Menu from '../components/Menu'

const Home = () => (
  <div>
    <div className="container display">
      <p>{ABOUT}</p>
    </div>

    <div className="container">
      <Menu />
    </div>
  </div>
)

export default Home
