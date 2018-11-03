import React from 'react'
import Jumbotron from '../components/Home/Jumbotron'

import { highlights } from '../content/homeJumbotron.json'

const Home = () => (
  <div>
    <Jumbotron highlights={highlights} />
  </div>
)

export default Home
