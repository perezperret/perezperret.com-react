import React from 'react'
import Jumbotron from '../components/Home/Jumbotron'
import SocialMediaLinks from '../components/Home/SocialMediaLinks'
import Contact from '../components/Contact'

import { highlights } from '../content/homeJumbotron.json'

const Home = () => (
  <div>
    <Jumbotron highlights={highlights} />
    <SocialMediaLinks />
    <Contact />
  </div>
)

export default Home
