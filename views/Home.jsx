import React from 'react'
import Jumbotron from '../components/Home/Jumbotron'
import SocialMediaLinks from '../components/Home/SocialMediaLinks'

import { highlights } from '../content/homeJumbotron.json'

const Home = () => (
  <div>
    <Jumbotron highlights={highlights} />
    <SocialMediaLinks />
  </div>
)

export default Home
